import { Button } from "../ui/button";

type SubmitButtonProps = {
  label: string;
  disabled?: boolean;
  pending?: boolean;
} & React.ComponentProps<"button">;

export function SubmitButton({
  label,
  disabled,
  pending,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      {...props}
      className="w-full cursor-pointer"
      disabled={disabled}
      type="submit"
    >
      {pending && (
        <span className="icon-[line-md--loading-twotone-loop] mr-2 size-4" />
      )}
      {label}
    </Button>
  );
}
