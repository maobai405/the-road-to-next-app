import Link from "next/link";
import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="Your home place to start" title="HomePage" />

      <div className="flex flex-1 flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          前往票务页面
        </Link>
      </div>
    </div>
  );
}
