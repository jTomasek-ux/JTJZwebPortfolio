import { Beliefs } from "@/components/Beliefs";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Beliefs />
      <FeaturedWork />
      <Services />
    </main>
  );
}
