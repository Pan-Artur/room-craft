import {
  FooterSection,
  NavLinks,
  Anchor,
  GithubLink,
  Authors,
} from "./styles/Footer.styled";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterSection>
      <NavLinks>
        <Anchor href="#how-it-works">Як це працює</Anchor>
        <Anchor href="#reviews">Відгуки</Anchor>
        <Anchor href="#faq">FAQ</Anchor>
      </NavLinks>

      <GithubLink
        href="https://github.com/Pan-Artur/room-craft"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub репозиторій"
      >
        <FaGithub />
      </GithubLink>

      <Authors>Автори: Артур Панковець, Максим Рябошапка</Authors>
    </FooterSection>
  );
};
