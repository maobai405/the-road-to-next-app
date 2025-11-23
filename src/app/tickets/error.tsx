"use client";

import { Placeholder } from "@/components/placeholder";

export default function ErrorElement({ error }: { error: Error }) {
  return <Placeholder label={error.message} />;
}
