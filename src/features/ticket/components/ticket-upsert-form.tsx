import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Ticket } from "@/drizzle/schema";
import { inertTicket, updateTicket } from "../server";

type TicketUpsertFormProps = {
  type: "create" | "update";
  ticket?: Ticket;
};

/**
 * 创建/更新票务表单
 */
export function TicketUpsertForm({ type, ticket }: TicketUpsertFormProps) {
  return (
    <form
      action={
        type === "create"
          ? inertTicket
          : updateTicket.bind(null, ticket?.id ?? "")
      }
      className="flex flex-col gap-y-4"
    >
      <div>
        <Label className="mb-2 text-lg" htmlFor="title">
          标题
        </Label>
        <Input defaultValue={ticket?.title} name="title" />
      </div>
      <div>
        <Label className="mb-2 text-lg" htmlFor="content">
          描述
        </Label>
        <Textarea defaultValue={ticket?.content} name="content" />
      </div>

      <Button className="w-full" type="submit">
        提交
      </Button>
    </form>
  );
}
