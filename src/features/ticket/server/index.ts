"use server";

import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type Ticket, ticketsTable } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { ticketsPath } from "@/paths";

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

/**
 * 创建票务(单个)
 */
export const inertTicket = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  // 实际插入数据库
  await db.insert(ticketsTable).values({ title, content });

  // 重新验证页面以显示最新数据
  revalidatePath(ticketsPath());
};

/**
 * 更新票务(单个)
 */
export const updateTicket = async (id: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  // 更新票务
  await db
    .update(ticketsTable)
    .set({ title, content })
    .where(eq(ticketsTable.id, id));

  // 重新验证页面以显示最新数据
  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};

/**
 * 删除票务(单个)
 */
export const deleteTicket = async (id: string) => {
  await db.delete(ticketsTable).where(eq(ticketsTable.id, id));

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
