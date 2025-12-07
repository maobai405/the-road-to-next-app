import { TicketUpsertCard } from "@/features/ticket/components/ticket-upsert-card";
import { getTicket } from "@/features/ticket/server";

type TicketEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * 票务编辑
 */
export default async function TicketEditPage({ params }: TicketEditPageProps) {
  const { id } = await params;
  const ticket = await getTicket(id);

  return (
    <div className="flex flex-1 items-center justify-center">
      <TicketUpsertCard ticket={ticket} />
    </div>
  );
}
