"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const section = document.getElementById("beliefs");
    if (!section) {
      setOverDark(false);
      return;
    }

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      setOverDark(rect.top < 72 && rect.bottom > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <div className="flex min-h-full flex-col bg-paper">
      <Header
        variant={pathname === "/" ? "mark" : "lockup"}
        inverted={overDark}
      />
      <div className="flex min-h-full flex-1 flex-col">{children}</div>
    </div>
  );
}
