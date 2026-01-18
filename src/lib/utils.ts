import { cn as baseCn } from "tailwind-variants";

export function cn(...inputs: Parameters<typeof baseCn>) {
  return baseCn(...inputs);
}
