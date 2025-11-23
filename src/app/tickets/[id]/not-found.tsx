import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>返回</Link>
        </Button>
      }
      label="没有找到该票务"
    />
  );
}
