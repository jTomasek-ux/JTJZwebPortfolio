import type { Metadata } from "next";
import { EmptyPage } from "@/components/EmptyPage";

export const metadata: Metadata = {
  title: "About — KUBIC STUDIO",
};

export default function AboutPage() {
  return (
    <main>
      <EmptyPage title="About" />
    </main>
  );
}
