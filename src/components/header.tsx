import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { buttonVariants } from "./ui/button";

export function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b bg-background/95 px-5 py-2.5 backdrop-blur backdrop-blur:bg-background/60">
      <div>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={homePath()}
        >
          <span className="icon-[lucide--kanban]" />
          <h1 className="font-semibold text-lg">TicketBounty</h1>
        </Link>
      </div>
      <div>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href={ticketsPath()}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
}
