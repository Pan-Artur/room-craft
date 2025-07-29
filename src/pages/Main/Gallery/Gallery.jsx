import { Container } from "../../../components/Container/Container";
import {
  Section,
  Heading,
  Showcase,
  Thumbnail,
  Label,
} from "./styles/Gallery.styled";

import scandinavianImage from "../../../assets/images/Gallery/scandinavian.webp";
import loftImage from "../../../assets/images/Gallery/loft.webp";
import minimalistImage from "../../../assets/images/Gallery/minimalist.webp";

const rooms = [
  { src: scandinavianImage, styleName: "Скандинавський" },
  { src: loftImage, styleName: "Лофт" },
  { src: minimalistImage, styleName: "Мінімалізм" },
];

export const Gallery = () => (
  <Section>
    <Container>
      <Heading>Натхнення для вашого дизайну</Heading>
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
