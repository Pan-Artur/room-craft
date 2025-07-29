import {
  Section,
  Title,
  StepsWrapper,
  StepCard,
  StepNumber,
  StepTitle,
} from "./styles/HowItWorks.styled";

const steps = [
  { number: "1", title: "Оберіть розмір кімнати" },
  { number: "2", title: "Додайте меблі" },
  { number: "3", title: "Налаштуйте кольори" },
  { number: "4", title: "Збережіть та поділіться" },
];

export const HowItWorks = () => (
  <Section id="how-it-works">
    <Title>Як це працює?</Title>
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
