ALTER TABLE "users" ADD COLUMN "energyBadge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "waterBadge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "natureBadge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "energyTasksCompleted" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "waterTasksCompleted" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "natureTasksCompleted" integer DEFAULT 0;