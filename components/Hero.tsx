import { STUDIO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end bg-mist px-[4vw] pb-[6vh] pt-[18vh]">
      <h1 className="display text-[clamp(28px,5.2vw,84px)]">
        <span className="block">{STUDIO.hero[0]}</span>
        <span className="mt-[0.08em] block pl-[18%]">{STUDIO.hero[1]}</span>
      </h1>
    </section>
  );
}
