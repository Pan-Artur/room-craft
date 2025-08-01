import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderFlex,
  LogoLink,
  Nav,
  BurgerBtn,
  BurgerMenu,
  BurgerNav,
  SvgContainer,
} from "./styles/Header.styled";
import { Container } from "../Container/Container";
import { IoClose as CrossIcon } from "react-icons/io5";
import { GiHamburgerMenu as BurgerIcon } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import logoImage from "../../assets/images/logo.webp";
import { LanguageToggler } from "../LanguageToggler/LanguageToggler";

export const Header = () => {
  const [isMenuOpen, setManuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleOpen = () => {
    setManuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <HeaderFlex>
            <LogoLink to="/">
              <img src={logoImage} alt="Logo" />
              <span>RoomCraft</span>
            </LogoLink>
  
            <Nav>
              <Link to="/">{t("header.page1")}</Link>
              <Link to="/build">{t("header.page2")}</Link>
            </Nav>
  
            <BurgerBtn onClick={toggleOpen}>
              <BurgerIcon />
            </BurgerBtn>
  
            <BurgerMenu style={{ display: isMenuOpen ? "block" : "none" }}>
              <SvgContainer onClick={toggleOpen}>
                <CrossIcon />
              </SvgContainer>
  
              <BurgerNav>
                <Link onClick={toggleOpen} to="/">
                  {t("header.page1")}
                </Link>
                <Link onClick={toggleOpen} to="/build">
                  {t("header.page2")}
                </Link>
              </BurgerNav>
            </BurgerMenu>
          </HeaderFlex>
  
          <LanguageToggler />
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};