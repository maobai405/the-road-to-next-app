import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TicketList } from "@/features/ticket/components/ticketList";
import { createTicket } from "@/features/ticket/server";

export default function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="所有票务,一站管理" title="TicketsPage" />

      <Card className="w-full max-w-[420px] self-center">
        <CardHeader>
          <CardTitle className="text-2xl">创建票务</CardTitle>
          <CardDescription>创建一个新的票务</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createTicket} className="flex flex-col gap-y-4">
            <div>
              <Label className="mb-2 text-lg" htmlFor="title">
                标题
              </Label>
              <Input id="title" name="title" />
            </div>
            <div>
              <Label className="mb-2 text-lg" htmlFor="content">
                描述
              </Label>
              <Textarea id="content" name="content" />
            </div>

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
