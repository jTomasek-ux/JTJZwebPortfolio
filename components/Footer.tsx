import Link from "next/link";
import { NAV, STUDIO } from "@/lib/content";

export function Footer() {
  return (
    <footer className="nav-bar mt-auto overflow-hidden bg-paper px-[4vw] pt-20 pb-0">
      <div className="grid gap-10 border-t border-ink pt-8 md:grid-cols-3">
        <div className="nav-meta">
          <p>{STUDIO.lockup}</p>
          <p>{STUDIO.copyright}</p>
        </div>
        <div className="nav-meta md:text-center">
          <a href={`mailto:${STUDIO.email}`} className="block">
            {STUDIO.email}
          </a>
        </div>
        <nav className="nav-meta flex flex-wrap gap-x-4 gap-y-1 md:justify-end" aria-label="Footer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="display mt-16 mb-[-0.12em] text-center text-[min(13vw,calc((100vw-8vw)/9.4))] whitespace-nowrap">
        {STUDIO.mark}
      </p>
    </footer>
  );
}
