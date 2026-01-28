"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Ticket } from "@/drizzle/schema";
import { TICKET_ICONS } from "@/features/constants";
import { cn } from "@/lib/utils";
import { ticketEditPath, ticketPath, ticketsPath } from "@/paths";
import { deleteTicket } from "../server";

type TicketItemProps = {
  ticket: Ticket;
  index?: number;
  isDetail?: boolean;
};

export function TicketItem({
  ticket,
  index = 0,
  isDetail = false,
}: TicketItemProps) {
  const router = useRouter();

  const { execute, isPending } = useAction(deleteTicket, {
    onSuccess: () => {
      toast.success("删除成功");
      if (isDetail) {
        router.refresh();
        router.push(ticketsPath());
      }
    },
    onError: ({ error }) => {
      toast.error(error.serverError ?? "删除失败");
    },
  });

  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketPath(ticket.id)} prefetch>
        <span className="icon-[line-md--alert-circle] size-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketEditPath(ticket.id)} prefetch>
        <span className="icon-[line-md--pencil] size-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <Button
      disabled={isPending}
      onClick={() => execute({ id: ticket.id })}
      size="icon"
      variant="outline"
    >
      <span className="icon-[line-md--trash] size-4" />
    </Button>
  );

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={cn("flex w-full gap-x-1", {
        "max-w-145": isDetail,
        "max-w-105": !isDetail,
      })}
      initial={{ y: -15, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2 text-2xl">
            <span className={TICKET_ICONS[ticket.status]} />
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p
            className={cn("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {deleteButton}
            {editButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </motion.div>
  );
}
