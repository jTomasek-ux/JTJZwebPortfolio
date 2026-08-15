import type { Metadata } from "next";
import { EmptyPage } from "@/components/EmptyPage";

export const metadata: Metadata = {
  title: "Work — KUBIC STUDIO",
};

export default function WorkPage() {
  return (
    <main>
      <EmptyPage title="Work" />
    </main>
  );
}
