import { HashLink } from "react-router-hash-link";
import {
  FooterSection,
  NavLinks,
  GithubLink,
  Authors,
} from "./styles/Footer.styled";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <NavLinks>
        <HashLink smooth to="/#how-it-works">
          {t("footer.anchor1")}
        </HashLink>
        <HashLink smooth to="/#reviews">
          {t("footer.anchor2")}
        </HashLink>
        <HashLink smooth to="/#faq">
          {t("footer.anchor3")}
        </HashLink>
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
