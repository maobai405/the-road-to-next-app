import * as motion from "motion/react-client";
import Link from "next/link";
import { Heading } from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  DONE: "icon-[lucide--circle-check]",
  OPEN: "icon-[lucide--file-text]",
  IN_PROGRESS: "icon-[lucide--pencil]",
};

export default function TicketsPage() {
  console.log("initialTickets", initialTickets);
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="所有票务，一站管理" title="TicketsPage" />

      <div className="flex flex-1 flex-col items-center gap-y-8">
        {initialTickets.map((ticket, index) => (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-[420px]"
            initial={{ y: -15, opacity: 0 }}
            key={ticket.id}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
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
                <Link
                  className="text-sm underline"
                  href={ticketPath(ticket.id)}
                >
                  查看
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
