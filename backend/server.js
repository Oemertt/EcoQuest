import { createClerkClient } from '@clerk/backend';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import { desc, eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/neon-http';
import express from 'express';
import { users } from './src/db/schema.js';
dotenv.config();
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

// DATABASE_URL überprüfen
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
}

// Neon Client erstellen und dann Drizzle initialisieren
const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

const app = express();
app.use(express.json());
app.listen(process.env.PORT
    , () => { console.log('Server is running on port ' + process.env.PORT); });

app.get('/', (req, res) => {
    res.send('Welcome to the EcoQuest');
});


app.post('/user/init', async (req, res) => {
    const { userId } = req.body;

    if (!userId) return res.status(400).json({ error: 'No userId provided' });

    try {
        const existing = await db.select().from(users).where(eq(users.id, userId));

        if (existing.length === 0) {
           const [createdUser] = await db.insert(users).values({
                id: userId,
                points: 0,
            }).returning();
            console.log('Created new user:', createdUser);
            return res.json(createdUser);
        }
        console.log('Found existing user:', existing[0]);
        return res.json(existing[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});




app.get("/leaderboard", async (req, res) => {
    try {
        console.log("Leaderboard request received");

        // 1. Hole nur die Top 3 User sortiert nach Punkten
        const pointsData = await db
            .select()
            .from(users)
            .orderBy(desc(users.points))
            .limit(3);

        console.log("Points data from DB:", pointsData);

        if (pointsData.length === 0) {
            return res.json([]);
        }

        // 2. Clerk-Daten für diese IDs holen
        const clerkIds = pointsData.map(u => u.id);
        console.log("Clerk IDs to fetch:", clerkIds);

        let clerkUsers = [];
        try {
            // Verbesserter Clerk API-Aufruf
            for (const userId of clerkIds) {
                try {
                    const clerkUser = await clerkClient.users.getUser(userId);
                    clerkUsers.push(clerkUser);
                } catch (clerkError) {
                    console.warn(`Could not fetch Clerk user ${userId}:`, clerkError.message);
                    // Fallback-Benutzer erstellen
                    clerkUsers.push({
                        id: userId,
                        firstName: 'Unbekannt',
                        lastName: '',
                        imageUrl: null
                    });
                }
            }
        } catch (clerkError) {
            console.error("Clerk API error:", clerkError);
            // Fallback: Leaderboard ohne Clerk-Daten erstellen
            const leaderboard = pointsData.map((u, index) => ({
                clerkUserId: u.id,
                points: u.points,
                name: `Benutzer ${index + 1}`,
                imageUrl: null,
            }));
            return res.json(leaderboard);
        }

        // 3. Zusammenführen
        const leaderboard = pointsData.map(u => {
            const clerkUser = clerkUsers.find(cu => cu.id === u.id);
            return {
                clerkUserId: u.id,
                points: u.points,
                name: `${clerkUser?.firstName ?? "Unbekannt"} ${clerkUser?.lastName ?? ""}`.trim(),
                imageUrl: clerkUser?.imageUrl || null,
            };
        });

        console.log("Final leaderboard:", leaderboard);
        res.json(leaderboard);
    } catch (error) {
        console.error("Fehler beim Erstellen der Rangliste:", error);
        console.error("Error stack:", error.stack);
        res.status(500).json({ error: "Interner Serverfehler", details: error.message });
    }
});





app.patch('/increase-tasks-points', async (req, res) => {
    const { userId, category, points } = req.body;


    if (!userId || category === undefined) {
        return res.status(400).json({ error: 'userId and category are required' });
    }

    try {
        // Zuerst den aktuellen Benutzer holen
        const currentUser = await db.select().from(users).where(eq(users.id, userId));

        if (currentUser.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = currentUser[0];
        
        
        // Basis-Update für alle Kategorien
        const baseUpdate = {
            points: user.points + points,
            tasksCompleted: user.tasksCompleted + 1
        };

        // Kategorie-spezifische Updates
        const categoryUpdates = {
            "Energy": { energyTasksCompleted: user.energyTasksCompleted + 1 },
            "Water": { waterTasksCompleted: user.waterTasksCompleted + 1 },
            "Nature": { natureTasksCompleted: user.natureTasksCompleted + 1 },
            "Mobility": { mobilityTasksCompleted: (user.mobilityTasksCompleted || 0) + 1 },
            "Recycling": { recyclingTasksCompleted: (user.recyclingTasksCompleted || 0) + 1 },
            "Consumption": { consumptionTasksCompleted: (user.consumptionTasksCompleted || 0) + 1 }
        };

        // Kombiniere Base-Update mit kategorie-spezifischem Update
        const updateData = {
            ...baseUpdate,
            ...(categoryUpdates[category] || {})
        };


        const result = await db
            .update(users)
            .set(updateData)
            .where(eq(users.id, userId))
            .returning();

      
        
        res.status(200).json({
            status: 'ok',
            user: result[0],
            pointsAdded: points
        });
    } catch (err) {
        console.error('❌ Error adding points:', err);
        res.status(500).json({ error: 'Database error, could not add points or tasks completed' });
    }
})

app.patch('/activate-badge', async (req, res) => {
    const { userId, category } = req.body;
    
    if (!userId || !category) {
        return res.status(400).json({ error: 'userId and category are required' });
    }

    try {
        const currentUser = await db.select().from(users).where(eq(users.id, userId));
        
        if (currentUser.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        let updateData = {};
        
        if(category === "Energy") {
            updateData = {
                energyBadge: true
            };
        }
        else if(category === "Water") {
            updateData = {
                waterBadge: true
            };
        }
        else if(category === "Nature") {
            updateData = {
                natureBadge: true
            };
        }
        else if(category === "Mobility") {
            updateData = {
                mobilityBadge: true
            };
        }
        else if(category === "Recycling") {
            updateData = {
                recyclingBadge: true
            };
        }
        else if(category === "Consumption") {
            updateData = {
                consumptionBadge: true
            };
        }
        else {
            return res.status(400).json({ error: 'Invalid category' });
        }

        const result = await db
            .update(users)
            .set(updateData)
            .where(eq(users.id, userId))
            .returning();
            
        console.log(`Activated ${category} badge for user ${userId}`);
        res.status(200).json({
            status: 'ok',
            user: result[0]
        });
    } catch (err) {
        console.error('Error activating badge:', err);
        res.status(500).json({ error: 'Database error, could not activate badge' });    
    }
});
    
