import { BELIEFS } from "@/lib/content";

export function Beliefs() {
  return (
    <section id="beliefs" className="nav-bar border-t border-paper bg-ink px-[4vw] py-[12vh] text-paper">
      <h2 className="text-[clamp(28px,3.4vw,46px)] font-medium leading-[1.2] tracking-[-0.02em] md:max-w-[75%]">
        {BELIEFS.statement}
      </h2>
    </section>
  );
}
