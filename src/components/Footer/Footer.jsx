import {
  FooterSection,
  NavLinks,
  Anchor,
  GithubLink,
  Authors,
} from "./styles/Footer.styled";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const {t} = useTranslation();

  return (
    <FooterSection>
      <NavLinks>
        <Anchor href="#how-it-works">{t("footer.anchor1")}</Anchor>
        <Anchor href="#reviews">{t("footer.anchor2")}</Anchor>
        <Anchor href="#faq">{t("footer.anchor3")}</Anchor>
      </NavLinks>

      <GithubLink
        href="https://github.com/Pan-Artur/room-craft"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub репозиторій"
      >
        <FaGithub />
      </GithubLink>

      <Authors>{t("footer.authors")}</Authors>
    </FooterSection>
  );
};
