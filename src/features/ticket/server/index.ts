"use server";

import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { type Ticket, ticketsTable } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { ticketPath, ticketsPath } from "@/paths";

/**
 * 获取票务列表
 */
export const getTickets = async (): Promise<Ticket[]> =>
  await db.query.ticketsTable.findMany({
    orderBy: [asc(ticketsTable.createdAt)],
  });

/**
 * 获取票务(单个)
 */
export const getTicket = async (id: string): Promise<Ticket | undefined> =>
  await db.query.ticketsTable.findFirst({
    where: eq(ticketsTable.id, id),
  });

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

/**
 * 插入或更新票务(单个)
 */
export const upsertTicket = async (
  id: string | undefined,
  _actionState: { message: string },
  formData: FormData
) => {
  try {
    const params = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    // 插入或更新票务
    // 如果提供了 id，则尝试插入该 id 的记录；如果 id 已存在则更新
    // 如果未提供 id，则生成新的 UUID 并插入
    await db
      .insert(ticketsTable)
      .values({ id, ...params })
      .onConflictDoUpdate({
        target: ticketsTable.id,
        set: params,
      });
  } catch (_error) {
    return { message: "程序出现问题", payload: formData };
  }

  // 重新验证页面以显示最新数据
  revalidatePath(ticketsPath());
  if (id) {
    redirect(ticketPath(id));
  }

  return { message: "提交成功" };
};

/**
 * 删除票务(单个)
 */
export const deleteTicket = async (id: string) => {
  await db.delete(ticketsTable).where(eq(ticketsTable.id, id));

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
