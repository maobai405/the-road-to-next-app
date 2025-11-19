"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="icon"
      variant="outline"
    >
      <span
        className={cn(
          "icon-[lucide--sun] size-4 rotate-0 scale-100 transition-all",
          "dark:-rotate-90 dark:scale-0"
        )}
      />
      <span
        className={cn(
          "icon-[lucide--moon] absolute size-4 rotate-90 scale-0 transition-transform",
          "dark:rotate-0 dark:scale-100"
        )}
      />

      <span className="sr-only">切换主题</span>
    </Button>
  );
}
