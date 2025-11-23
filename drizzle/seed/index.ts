import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { ticketsTable } from "../schema";

export const tickets = [
  {
    title: "Ticket 1",
    content: "This is ticket 1",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "This is ticket 2",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is ticket 3",
    status: "IN_PROGRESS" as const,
  },
];

async function main() {
  // 禁用迁移模式
  const client = postgres(process.env.DATABASE_URL ?? "");
  const db = drizzle(client);

  console.log("🌱 开始插入种子数据...");

  // 清空现有数据（可选）
  console.log("🗑 清空现有 tickets 数据...");
  await db.delete(ticketsTable);

  // 插入种子数据
  console.log("📝 插入种子数据...");
  const insertedTickets = await db
    .insert(ticketsTable)
    .values(
      tickets.map((ticket) => ({
        title: ticket.title,
        content: ticket.content,
        status: ticket.status,
      }))
    )
    .returning();

  console.log(`✅ 成功插入 ${insertedTickets.length} 条 tickets 记录`);
  console.log("🎉 种子数据插入完成！");

  await client.end();
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ 种子数据插入失败:", err);
    process.exit(1);
  });
