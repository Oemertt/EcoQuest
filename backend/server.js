import express from 'express';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import {desc, eq} from 'drizzle-orm';
import { users } from './src/db/schema.js';
import dotenv from 'dotenv';
import { createClerkClient } from '@clerk/backend'
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
app.listen(5001, () => { console.log('Server is running on port 5001'); });

app.get('/', (req, res) => {
    res.send('Welcome to the EcoQuest');
});

/*
app.post('/api/clerk-webhook', async (req, res) => {
    const event = req.body;

    if (event.type === 'user.created') {
        const clerkUserId = event.data.id;

        try {
            // in die users-Tabelle einfügen
            await db.insert(userTable).values({
                id: clerkUserId,
                points: 0,
            });

            return res.status(200).json({ success: true });
        } catch (err) {
            console.error('Fehler beim Einfügen:', err);
            return res.status(500).json({ error: 'DB insert failed' });
        }
    }

    res.status(200).json({ received: true });
});*/


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

/*app.get('/user', async (req, res) => {
    const { userId } = req.query;
    const user = await db.select().from(users).where(eq(users.id, userId));
    if (user.length === 0) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user[0]);
})*/

app.patch('/add-points', async (req, res) => {
    const { userId, points } = req.body;

    if (!userId || points === undefined) {
        return res.status(400).json({ error: 'userId and points are required' });
    }

    try {
        // Zuerst den aktuellen Benutzer holen
        const currentUser = await db.select().from(users).where(eq(users.id, userId));

        if (currentUser.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Punkte berechnen und aktualisieren
        const newPoints = currentUser[0].points + points;

        const result = await db
            .update(users)
            .set({ points: newPoints })
            .where(eq(users.id, userId))
            .returning();

        console.log(`Added ${points} points to user ${userId}. New total: ${newPoints}`);

        res.status(200).json({
            status: 'ok',
            user: result[0],
            pointsAdded: points
        });
    } catch (err) {
        console.error('Error adding points:', err);
        res.status(500).json({ error: 'Database error, could not add points' });
    }
})

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
