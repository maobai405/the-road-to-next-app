import { cloneElement } from "react";
import { cn } from "@/lib/utils";

type PlaceHolderProps = {
  icon?: string;
  label: string;
  button?: React.ReactElement<React.ComponentPropsWithoutRef<"button">>;
};

export function Placeholder({
  icon = "icon-[lucide--triangle-alert]",
  label,
  button = <div />,
}: PlaceHolderProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2">
      <span className={cn("size-16", icon)} />
      <h2 className="text-lg">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
}
