import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { Gallery } from "./Gallery/Gallery";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { Reviews } from "./Reviews/Reviews";
import { FAQ } from "./FAQ/FAQ";

export const Main = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Gallery />
      <HowItWorks />
      <Reviews />
      <FAQ />
    </main>
  );
};
