import { Container } from "../../../components/Container/Container";
import {
  Section,
  Heading,
  Showcase,
  Thumbnail,
  Label,
} from "./styles/Gallery.styled";
import { useTranslation } from "react-i18next";

import scandinavianImage from "../../../assets/images/Gallery/scandinavian.webp";
import loftImage from "../../../assets/images/Gallery/loft.webp";
import minimalistImage from "../../../assets/images/Gallery/minimalist.webp";

export const Gallery = () => {
  const { t } = useTranslation();

  const rooms = [
    { src: scandinavianImage, styleName: t("gallery.text1") },
    { src: loftImage, styleName: t("gallery.text2") },
    { src: minimalistImage, styleName: t("gallery.text3") },
  ];

  return (
    <Section>
      <Container>
        <Heading>{t("gallery.title")}</Heading>
        <Showcase>
          {rooms.map((room, i) => (
            <Thumbnail key={i}>
              <img src={room.src} alt={room.styleName} />
              <Label>{room.styleName}</Label>
            </Thumbnail>
          ))}
        </Showcase>
      </Container>
    </Section>
  );
};
