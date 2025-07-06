"use client";

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";

export default function client() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: "Subhajit PREFETCH" }));

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
