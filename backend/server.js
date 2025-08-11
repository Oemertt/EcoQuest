import express from 'express';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { eq } from 'drizzle-orm';
import { users } from './src/db/schema.js';
import dotenv from 'dotenv';
dotenv.config();

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


app.post('/api/user/init', async (req, res) => {
    const { userId } = req.body;

    if (!userId) return res.status(400).json({ error: 'No userId provided' });

    try {
        const existing = await db.select().from(users).where(eq(users.id, userId));

        if (existing.length === 0) {
            await db.insert(users).values({
                id: userId,
                points: 0,
            });
        }

        res.status(200).json({ status: 'ok' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});
