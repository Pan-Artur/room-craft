import { GiSofa, GiSmartphone, GiSave } from "react-icons/gi";
import { Container } from "../../../../components/Container/Container";
import {
  Section,
  FeaturesWrapper,
  Card,
  Icon,
  Title,
  Description,
} from "./styles/Features.styled";

const features = [
  {
    icon: <GiSofa />,
    title: "Безмежна творчість",
    description:
      "Поєднуйте тисячі елементів інтер’єру: колір, текстуру, розмір — дизайн без обмежень.",
  },
  {
    icon: <GiSmartphone />,
    title: "Доступність",
    description:
      "Працює на мобільних, планшетах і комп’ютерах — прямо в браузері.",
  },
  {
    icon: <GiSave />,
    title: "Збереження проектів",
    description: "Ваші дизайни зберігаються в акаунті й доступні будь-коли.",
  },
];

export const Features = () => (
  <Section>
    <Container>
      <FeaturesWrapper>
        {features.map((feature, i) => (
          <Card key={i}>
            <Icon>{feature.icon}</Icon>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </Card>
        ))}
      </FeaturesWrapper>
    </Container>
  </Section>
);
