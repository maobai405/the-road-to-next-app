"use client";

import { Label } from "@radix-ui/react-label";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
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
  const [isLoading, startTransition] = useTransition();

  const upsertTocketAction = (formData: FormData) => {
    startTransition(async () => {
      await upsertTicket.bind(null, ticket?.id)(formData);
    });
  };

  return (
    <form action={upsertTocketAction} className="flex flex-col gap-y-4">
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

      <Button className="w-full" disabled={isLoading} type="submit">
        {isLoading && (
          <span className="icon-[line-md--loading-twotone-loop] mr-2 size-4" />
        )}
        {ticket ? "编辑" : "创建"}
      </Button>
    </form>
  );
}
