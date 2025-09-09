import { boolean } from 'drizzle-orm/gel-core';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: text('id').primaryKey(), // Clerk user ID
    points: integer('points').default(0),
    energyBadge: boolean('energyBadge').default(false),
    waterBadge: boolean('waterBadge').default(false),
    natureBadge: boolean('natureBadge').default(false),
    energyTasksCompleted: integer('energyTasksCompleted').default(0),
    waterTasksCompleted: integer('waterTasksCompleted').default(0),
    natureTasksCompleted: integer('natureTasksCompleted').default(0),
    tasksCompleted: integer('tasksCompleted').default(0),
    level: integer('level').default(1),
});

//mobilityTasksCompleted: integer('mobilityTasksCompleted').default(0),
//recyclingTasksCompleted: integer('recyclingTasksCompleted').default(0),
//consumptionTasksCompleted: integer('consumptionTasksCompleted').default(0),