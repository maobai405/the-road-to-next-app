import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  label: string;
};

export function SubmitButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} type="submit">
      {pending && (
        <span className="icon-[line-md--loading-twotone-loop] mr-2 size-4" />
      )}
      {label}
    </Button>
  );
}
