import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { Gallery } from "./Gallery/Gallery";
import { HowItWorks } from "./HowItWorks/HowItWorks";

export const Main = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Gallery />
      <HowItWorks />
    </main>
  );
};
