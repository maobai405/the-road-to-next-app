import * as motion from "motion/react-client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import type { Ticket } from "@/features/types";
import { ticketPath } from "@/paths";

type TicketItemProps = {
  ticket: Ticket;
  index: number;
};

export function TicketItem({ ticket, index }: TicketItemProps) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className="w-full max-w-[420px]"
      initial={{ y: -15, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span className={TICKET_ICONS[ticket.status]} />
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-3 whitespace-break-spaces">
            {ticket.content}
          </p>
        </CardContent>

        <CardFooter>
          <Link className="text-sm underline" href={ticketPath(ticket.id)}>
            查看
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
