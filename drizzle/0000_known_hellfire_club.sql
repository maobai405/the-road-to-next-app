CREATE TYPE "public"."ticket_status" AS ENUM('OPEN', 'IN_PROGRESS', 'DONE');--> statement-breakpoint
CREATE TABLE "tickets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"content" varchar(1024) NOT NULL,
	"status" "ticket_status" DEFAULT 'OPEN' NOT NULL
);
