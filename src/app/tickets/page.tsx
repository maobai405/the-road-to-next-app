import { Heading } from "@/components/heading";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticketItem";

export default function TicketsPage() {
  console.log("initialTickets", initialTickets);
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="所有票务,一站管理" title="TicketsPage" />

      <div className="flex flex-1 flex-col items-center gap-y-8">
        {initialTickets.map((ticket, index) => (
          <TicketItem index={index} key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
