import { Container } from "../../../components/Container/Container";
import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "./styles/Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <Container>
        <HeroContent>
          <HeroTitle>Розміщуй. Випробовуй. Втілюй ідеї.</HeroTitle>
          <HeroSubtitle>
            Перетягуй меблі, експериментуй зі стилем та створи кімнату, яка
            відображає тебе.
          </HeroSubtitle>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};
