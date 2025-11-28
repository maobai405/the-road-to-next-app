import { Suspense } from "react";
import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { TicketList } from "@/features/ticket/components/ticketList";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="所有票务,一站管理" title="TicketsPage" />

      <CardCompact
        content={<TicketUpsertForm type="create" />}
        description="创建一个新的票务"
        title="创建票务"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
