import {
  Section,
  Title,
  StepsWrapper,
  StepCard,
  StepNumber,
  StepTitle,
} from "./styles/HowItWorks.styled";
import { useTranslation } from "react-i18next";

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { number: "1", title: t("how-it-works.text1") },
    { number: "2", title: t("how-it-works.text2") },
    { number: "3", title: t("how-it-works.text3") },
    { number: "4", title: t("how-it-works.text4") },
  ];

  return (
    <Section id="how-it-works">
      <Title>{t("how-it-works.title")}</Title>
      <StepsWrapper>
        {steps.map(({ number, title }) => (
          <StepCard key={number}>
            <StepNumber>{number}</StepNumber>
            <StepTitle>{title}</StepTitle>
          </StepCard>
        ))}
      </StepsWrapper>
    </Section>
  );
};
