import Link from "next/link";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function TicketPage({ params }: TicketPageProps) {
  const { id } = await params;
  const currentTicket = initialTickets.find((ticket) => ticket.id === id);

  if (!currentTicket) {
    return (
      <PlaceHolder
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
        label="Ticket not found"
      />
    );
  }

  return <h2>{currentTicket.title}</h2>;
}
