import { pgTable, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: text('id').primaryKey(), // Clerk user ID
    points: integer('points').default(0),
});
