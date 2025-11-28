"use client";

import { Label } from "@radix-ui/react-label";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Ticket } from "@/drizzle/schema";
import { upsertTicket } from "../server";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

/**
 * 创建/更新票务表单
 */
export function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
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

      <SubmitButton label={ticket ? "编辑" : "创建"} />
    </form>
  );
}
