"use client";

import Link from "next/link";
import { useRef } from "react";
import { BrandLockup } from "@/components/Brand";
import { CollaborateCta } from "@/components/CollaborateCta";
import { NAV } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const node = root.current;
      if (!node) return;

      const links = node.querySelectorAll(".menu-link");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (open) {
        gsap.set(node, { display: "flex" });
        if (reduced) {
          gsap.set(node, { yPercent: 0 });
          gsap.set(links, { y: 0, opacity: 1 });
          return;
        }
        gsap.fromTo(
          node,
          { yPercent: -100 },
          { yPercent: 0, duration: 0.7, ease: "power3.inOut" },
        );
        gsap.fromTo(
          links,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, delay: 0.22, ease: "power3.out" },
        );
        return;
      }

      if (reduced) {
        gsap.set(node, { yPercent: -100, display: "none" });
        return;
      }

      gsap.to(node, {
        yPercent: -100,
        duration: 0.55,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(node, { display: "none" });
        },
      });
    },
    { dependencies: [open], scope: root },
  );

  return (
    <div
      ref={root}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 hidden flex-col bg-void px-[4vw] pt-[2.4vw] text-paper"
      style={{ transform: "translateY(-100%)" }}
    >
      <div className="nav-bar grid grid-cols-[1fr_auto_1fr] items-start">
        <button type="button" onClick={onClose} className="nav-meta justify-self-start text-paper">
          [ X ] CLOSE
        </button>
        <BrandLockup inverted />
        <div className="justify-self-end">
          <CollaborateCta inverted onClick={onClose} />
        </div>
      </div>

      <nav className="mt-[7vh] w-full" aria-label="Primary">
        <ul className="flex justify-between">
          {NAV.slice(0, 2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="menu-link display text-[clamp(42px,9.5vw,160px)] text-paper transition-opacity hover:opacity-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-[1.2vw] flex justify-center gap-[18vw]">
          {NAV.slice(2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="menu-link display text-[clamp(42px,9.5vw,160px)] text-paper transition-opacity hover:opacity-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
