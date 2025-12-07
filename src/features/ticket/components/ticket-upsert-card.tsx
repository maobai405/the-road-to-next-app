"use client";

import { useForm } from "@tanstack/react-form";
import { CardCompact } from "@/components/card-compact";
import { SubmitButton } from "@/components/form/submit-button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Ticket } from "@/drizzle/schema";
import { upsertTicketSchema } from "@/features/constants";
import { upsertTicket } from "../server";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const FORM_ID = "ticket-upsert-form";

/**
 * 创建/更新票务表单卡片
 */
export function TicketUpsertCard({ ticket }: TicketUpsertFormProps) {
  const form = useForm({
    defaultValues: {
      title: ticket?.title ?? "",
      content: ticket?.content ?? "",
    },
    validators: {
      onChange: upsertTicketSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await upsertTicket(ticket?.id, value);
      } catch (error) {
        console.error("表单提交失败:", error);
      }
    },
  });

  return (
    <CardCompact
      content={
        <form
          className="flex flex-col gap-y-4"
          id={FORM_ID}
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field name="title">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>标题</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
            <form.Field name="content">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>描述</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </FieldGroup>
        </form>
      }
      description={ticket ? "编辑现有票务" : "创建一个新的票务"}
      footer={
        <form.Subscribe
          selector={(state) => ({
            isSubmitting: state.isSubmitting,
          })}
        >
          {({ isSubmitting }) => (
            <SubmitButton
              disabled={isSubmitting}
              form={FORM_ID}
              label={ticket ? "编辑" : "创建"}
              pending={isSubmitting}
            />
          )}
        </form.Subscribe>
      }
      title={ticket ? "编辑票务" : "创建票务"}
    />
  );
}
