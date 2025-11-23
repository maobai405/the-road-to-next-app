import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// 定义状态枚举
export const ticketStatus = pgEnum("ticket_status", [
  "OPEN",
  "IN_PROGRESS",
  "DONE",
]);

export const ticketsTable = pgTable("tickets", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  title: text("title").notNull(),
  content: varchar("content", { length: 1024 }).notNull(),
  status: ticketStatus("status").notNull().default("OPEN"),
});

export type Ticket = typeof ticketsTable.$inferSelect;
