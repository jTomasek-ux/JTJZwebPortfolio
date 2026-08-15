import { STUDIO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-mist px-[4vw] pt-24">
      <div className="nav-bar flex max-w-[92vw] flex-col items-center text-center text-ink">
        <h1 className="text-[clamp(32px,7.2vw,84px)] leading-[clamp(34px,7.6vw,88.5px)] tracking-[-0.006em] font-medium lg:text-[84px] lg:leading-[88.5px] lg:tracking-[-0.5px]">
          <span className="block">{STUDIO.hero.lines[0]}</span>
          <span className="block">{STUDIO.hero.lines[1]}</span>
        </h1>
        <p className="mt-[4vh] max-w-[28em] text-[clamp(14px,1.97vw,23px)] leading-[clamp(16px,2.18vw,25.5px)] tracking-normal font-medium lg:text-[23px] lg:leading-[25.5px] lg:tracking-[0]">
          {STUDIO.hero.subtext}
        </p>
      </div>
    </section>
  );
}
