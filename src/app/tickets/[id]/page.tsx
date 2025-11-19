import Link from "next/link";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticketItem";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function TicketPage({ params }: TicketPageProps) {
  const { id } = await params;
  const ticket = initialTickets.find((item) => item.id === id);

  if (!ticket) {
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

  return (
    <div className="flex justify-center">
      <TicketItem isDetail ticket={ticket} />
    </div>
  );
}
