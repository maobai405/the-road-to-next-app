"use client";

import { Label } from "@radix-ui/react-label";
import { useActionState } from "react";
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
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "" }
  );

  const payload = {
    title: actionState.payload?.get("title") as string,
    content: actionState.payload?.get("content") as string,
  };

  return (
    <form
      {...{
        action,
        className: "flex flex-col gap-y-4",
      }}
    >
      <div>
        <Label className="mb-2 text-lg" htmlFor="title">
          标题
        </Label>
        <Input defaultValue={payload.title ?? ticket?.title} name="title" />
      </div>
      <div>
        <Label className="mb-2 text-lg" htmlFor="content">
          描述
        </Label>
        <Textarea
          defaultValue={payload.content ?? ticket?.content}
          name="content"
        />
      </div>

      <SubmitButton label={ticket ? "编辑" : "创建"} />

      {actionState.message}
    </form>
  );
}
