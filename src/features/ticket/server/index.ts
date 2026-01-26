"use server";

import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { type Ticket, ticketsTable } from "@/drizzle/schema";
import { upsertTicketSchema } from "@/features/constants";
import { db } from "@/lib/db";
import { actionClient } from "@/lib/safe-action";
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
const upsertTicketInputSchema = z.object({
  id: z.string().optional(),
  data: upsertTicketSchema,
});

export const upsertTicket = actionClient
  .inputSchema(upsertTicketInputSchema)
  .action(async ({ parsedInput: { id, data } }) => {
    const inserted = await db
      .insert(ticketsTable)
      .values({ ...(id ? { id } : {}), ...data })
      .onConflictDoUpdate({
        target: ticketsTable.id,
        set: data,
      })
      .returning({ id: ticketsTable.id });

    const upsertedId = inserted.at(0)?.id;
    if (!upsertedId) {
      throw new Error("操作失败");
    }

    revalidatePath(ticketsPath());

    return { id: upsertedId };
  });

/**
 * 删除票务(单个)
 */
export const deleteTicket = async (id: string) => {
  await db.delete(ticketsTable).where(eq(ticketsTable.id, id));

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
