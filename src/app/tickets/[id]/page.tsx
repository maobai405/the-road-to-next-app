import { notFound } from "next/navigation";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/server";

type TicketPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { id } = await params;
  const ticket = await getTicket(id);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center">
      <TicketItem isDetail ticket={ticket} />
    </div>
  );
}
