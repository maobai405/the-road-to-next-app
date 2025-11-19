import { Separator } from "./ui/separator";

type HeadingProps = {
  title: string;
  description?: string;
};

export function Heading({ title, description }: HeadingProps) {
  return (
    <>
      <div>
        <h2 className="font-bold text-3xl tracking-tight">{title}</h2>
        {description && <p className="text-sm">{description}</p>}
      </div>

      <Separator />
    </>
  );
}
