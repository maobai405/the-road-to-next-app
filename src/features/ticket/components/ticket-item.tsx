"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Ticket } from "@/drizzle/schema";
import { TICKET_ICONS } from "@/features/constants";
import { cn } from "@/lib/utils";
import { ticketEditPath, ticketPath } from "@/paths";
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

  const handleDeleteTicket = () => {
    deleteTicket(ticket.id);
    toast.success("删除成功");
  };

  const deteleButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button
        asChild
        onClick={handleDeleteTicket}
        size="icon"
        variant="outline"
      >
        <Link href={ticketPath(ticket.id)}>
          <span className="icon-[line-md--trash] size-4" />
        </Link>
      </Button>
    </form>
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
            {deteleButton}
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
