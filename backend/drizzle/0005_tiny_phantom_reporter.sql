ALTER TABLE "users" ADD COLUMN "mobilityBadge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "recyclingBadge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "consumptionBadge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "mobilityTasksCompleted" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "recyclingTasksCompleted" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "consumptionTasksCompleted" integer DEFAULT 0;