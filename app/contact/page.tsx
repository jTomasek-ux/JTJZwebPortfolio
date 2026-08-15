import type { Metadata } from "next";
import { EmptyPage } from "@/components/EmptyPage";

export const metadata: Metadata = {
  title: "Contact — KUBIC STUDIO",
};

export default function ContactPage() {
  return (
    <main>
      <EmptyPage title="Contact" />
    </main>
  );
}
