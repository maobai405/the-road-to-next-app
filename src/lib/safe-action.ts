import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
  defaultValidationErrorsShape: "flattened",
  handleServerError(e) {
    console.error("Action server error:", e.message);
    return "操作失败，请稍后重试";
  },
});
