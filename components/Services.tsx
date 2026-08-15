import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section className="bg-paper px-[4vw] py-[12vh]">
      <div className="flex flex-wrap items-baseline justify-between gap-y-3">
        <h2 className="display text-[clamp(36px,8.4vw,132px)]">CO</h2>
        <h2 className="display text-[clamp(36px,8.4vw,132px)]">NABÍZÍME</h2>
      </div>

      <ul className="mt-16">
        {SERVICES.map((service) => (
          <li
            key={service.name}
            className="-mx-[4vw] flex items-baseline justify-between gap-6 border-t border-rule px-[4vw] py-6 last:border-b transition-colors hover:bg-ink hover:text-paper"
          >
            <span className="text-[clamp(26px,4.6vw,72px)] uppercase tracking-[-0.05em] leading-none">
              {service.name}
            </span>
            <span className="nav-meta shrink-0 text-right">{service.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
