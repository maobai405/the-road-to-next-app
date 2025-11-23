CREATE TYPE "public"."ticket_status" AS ENUM('OPEN', 'IN_PROGRESS', 'DONE');--> statement-breakpoint
CREATE TABLE "tickets" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tickets_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"content" varchar(1024) NOT NULL,
	"status" "ticket_status" DEFAULT 'OPEN' NOT NULL
);
