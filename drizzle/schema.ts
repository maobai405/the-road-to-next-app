import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// 定义状态枚举
export const ticketStatus = pgEnum("ticket_status", [
  "OPEN",
  "IN_PROGRESS",
  "DONE",
]);

export const ticketsTable = pgTable("tickets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp({ mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  title: text().notNull(),
  content: varchar({ length: 1024 }).notNull(),
  status: ticketStatus().notNull().default("OPEN"),
});
