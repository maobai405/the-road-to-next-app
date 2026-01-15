"use server";

import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { z } from "zod";
import { type Ticket, ticketsTable } from "@/drizzle/schema";
import { upsertTicketSchema } from "@/features/constants";
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
 * 插入或更新票务(单个)
 */
export type UpsertTicketResult =
  | { ok: true; id: string }
  | { ok: false; message: string };

export const upsertTicket = async (
  id: string | undefined,
  data: z.infer<typeof upsertTicketSchema>
): Promise<UpsertTicketResult> => {
  const params = upsertTicketSchema.parse(data);

  try {
    const inserted = await db
      .insert(ticketsTable)
      .values({ ...(id ? { id } : {}), ...params })
      .onConflictDoUpdate({
        target: ticketsTable.id,
        set: params,
      })
      .returning({ id: ticketsTable.id });

    const upsertedId = inserted.at(0)?.id;
    if (!upsertedId) {
      return { ok: false, message: "操作失败" };
    }

    revalidatePath(ticketsPath());
    return { ok: true, id: upsertedId };
  } catch {
    return { ok: false, message: "操作失败" };
  }
};

/**
 * 删除票务(单个)
 */
export const deleteTicket = async (id: string) => {
  await db.delete(ticketsTable).where(eq(ticketsTable.id, id));

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
