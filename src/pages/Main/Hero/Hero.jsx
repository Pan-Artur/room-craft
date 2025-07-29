import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container/Container";
import HeroImage from "../../../assets/images/Hero/hero.webp";
import {
  StyledHero,
  HeroGrid,
  ContentColumn,
  ImageColumn,
  Title,
  Subtitle,
  CTAButton,
  FeaturesList,
  FeatureItem,
  StatsWrapper,
  StatItem,
} from "./styles/Hero.styled";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <StyledHero>
      <Container>
        <HeroGrid>
          <ContentColumn>
            <Title>{t("hero.title")}</Title>
            <Subtitle>{t("hero.subtitle")}</Subtitle>

            <FeaturesList>
              <FeatureItem>🏆 {t("hero.item1")}</FeatureItem>
              <FeatureItem>🎨 {t("hero.item2")}</FeatureItem>
              <FeatureItem>💡 {t("hero.item3")}</FeatureItem>
            </FeaturesList>

            <StatsWrapper>
              <StatItem>
                <span>4.9/5</span>
                <p>{t("hero.text1")}</p>
              </StatItem>
              <StatItem>
                <span>50+</span>
                <p>{t("hero.text2")}</p>
              </StatItem>
            </StatsWrapper>

            <CTAButton onClick={() => navigate("/build")}>
              {t("hero.button")}
            </CTAButton>
          </ContentColumn>

          <ImageColumn>
            <img src={HeroImage} alt="Приклад дизайну кімнати" />
          </ImageColumn>
        </HeroGrid>
      </Container>
    </StyledHero>
  );
};
