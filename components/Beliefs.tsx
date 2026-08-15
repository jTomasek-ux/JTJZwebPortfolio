import { BELIEFS } from "@/lib/content";

export function Beliefs() {
  return (
    <section
      id="beliefs"
      className="font-nav border-t border-rule bg-paper px-[4vw] py-[12vh] text-ink"
    >
      <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
        <div className="order-2 md:order-1 md:col-span-4">
          <p className="text-[13px] font-medium leading-snug">{BELIEFS.badgeTitle}</p>
          <p className="mt-0.5 text-[13px] font-normal text-mute">{BELIEFS.badgeDetail}</p>
        </div>

        <h2 className="order-1 text-[clamp(22px,2.6vw,40px)] font-normal leading-[1.35] tracking-[-0.02em] text-mute md:order-2 md:col-span-8">
          {BELIEFS.statement.map((segment, index) =>
            segment.emphasis ? (
              <strong key={index} className="font-medium text-ink">
                {segment.text}
              </strong>
            ) : (
              <span key={index}>{segment.text}</span>
            ),
          )}
        </h2>
      </div>
    </section>
  );
}
