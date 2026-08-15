import Link from "next/link";
import { STUDIO } from "@/lib/content";

export function BrandLockup({
  inverted = false,
  href = "/",
}: {
  inverted?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`nav-bar nav-meta block text-center ${inverted ? "text-paper" : "text-ink"}`}
    >
      <span className="block">{STUDIO.lockup}</span>
      <span className="block">{STUDIO.copyright}</span>
    </Link>
  );
}

export function BrandMark({
  inverted = false,
  href = "/",
}: {
  inverted?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`nav-bar nav-meta tracking-[0.12em] ${inverted ? "text-paper" : "text-ink"}`}
    >
      {STUDIO.mark}
    </Link>
  );
}
