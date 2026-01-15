import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type CardCompactProps = {
  className?: string;
  title: string;
  description: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
};
export function CardCompact({
  className,
  title,
  description,
  content,
  footer,
}: CardCompactProps) {
  return (
    <Card className={cn("w-full max-w-105 self-center", className)}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>

      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
