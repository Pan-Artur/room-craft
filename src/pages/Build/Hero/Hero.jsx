import { Container } from "../../../components/Container/Container";

import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "./styles/Hero.styled";

import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroOverlay />
      <Container>
        <HeroContent>
          <HeroTitle>{t("build-hero.title")}</HeroTitle>
          <HeroSubtitle>{t("build-hero.subtitle")}</HeroSubtitle>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};
