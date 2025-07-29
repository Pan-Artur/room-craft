import { GiSofa, GiSmartphone, GiSave } from "react-icons/gi";
import { Container } from "../../../components/Container/Container";
import {
  Section,
  FeaturesWrapper,
  Card,
  Icon,
  Title,
  Description,
} from "./styles/Features.styled";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <GiSofa />,
      title: t("features.title1"),
      description: t("features.description1"),
    },
    {
      icon: <GiSmartphone />,
      title: t("features.title2"),
      description: t("features.description2"),
    },
    {
      icon: <GiSave />,
      title: t("features.title3"),
      description: t("features.description3"),
    },
  ];

  return (
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
};
