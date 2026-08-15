"use client";

import { BrandLockup, BrandMark } from "@/components/Brand";
import { CollaborateCta } from "@/components/CollaborateCta";

export function Header({
  variant = "lockup",
  inverted = false,
}: {
  variant?: "lockup" | "mark";
  inverted?: boolean;
}) {
  const tone = inverted ? "text-paper" : "text-ink";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-[4vw] pt-[2.4vw]">
      <div className="nav-bar pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center">
        <span className={`nav-meta justify-self-start ${tone}`}>MENU</span>
        {variant === "mark" ? <BrandMark inverted={inverted} /> : <BrandLockup inverted={inverted} />}
        <div className="justify-self-end">
          <CollaborateCta inverted={inverted} />
        </div>
      </div>
    </header>
  );
}
