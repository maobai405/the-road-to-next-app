import { Placeholder } from "@/components/placeholder";
import { getTickets } from "../server";
import { TicketItem } from "./ticket-item";

export async function TicketList() {
  const tickets = await getTickets();

  if (!tickets.length) {
    return <Placeholder label="暂无数据" />;
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-y-8">
      {tickets.map((ticket, index) => (
        <TicketItem index={index} key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
