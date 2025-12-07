import { z } from "zod";

export const TICKET_ICONS = {
  DONE: "icon-[line-md--circle-to-confirm-circle-transition]",
  OPEN: "icon-[line-md--file-document]",
  IN_PROGRESS: "icon-[line-md--pencil]",
};

export const upsertTicketSchema = z.object({
  title: z.string().min(1, "标题不能为空").max(1024),
  content: z.string().min(1, "描述不能为空").max(1024),
});
