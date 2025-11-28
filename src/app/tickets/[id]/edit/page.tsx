import { CardCompact } from "@/components/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
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
      <CardCompact
        content={<TicketUpsertForm ticket={ticket} type="update" />}
        description="编辑现有票务"
        title="编辑票务"
      />
    </div>
  );
}
