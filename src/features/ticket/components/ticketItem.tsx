import * as motion from "motion/react-client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import type { Ticket } from "@/features/types";
import { cn } from "@/lib/utils";
import { ticketPath } from "@/paths";

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
      <Link href={ticketPath(ticket.id)}>
        <span className="icon-[lucide--info] size-4" />
      </Link>
    </Button>
  );
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={cn("flex w-full gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
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

      {!isDetail && <div className="flex flex-col gap-y-1">{detailButton}</div>}
    </motion.div>
  );
}
