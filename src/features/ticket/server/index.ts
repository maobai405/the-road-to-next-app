"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type Ticket, ticketsTable } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { ticketsPath } from "@/paths";

/**
 * 获取票务列表
 */
export const getTickets = async (): Promise<Ticket[]> =>
  await db.query.ticketsTable.findMany();

/**
 * 获取票务(单个)
 */
export const getTicket = async (id: string): Promise<Ticket | undefined> =>
  await db.query.ticketsTable.findFirst({
    where: eq(ticketsTable.id, id),
  });

/**
 * 删除票务(单个)
 */
export const deleteTicket = async (id: string) => {
  await db.delete(ticketsTable).where(eq(ticketsTable.id, id));

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
