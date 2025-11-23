import type { Ticket } from "@/features/types";
import { db } from "@/lib/db";

/**
 * 获取票务列表
 */
export const getTickets = async (): Promise<Ticket[]> =>
  await db.query.ticketsTable.findMany();

/**
 * 获取票务(单个)
 */
export const getTicket = async (id: number): Promise<Ticket | undefined> => {
  const result = await db.query.ticketsTable.findFirst({
    where: (ticket, { eq }) => eq(ticket.id, id),
  });

  return result;
};
