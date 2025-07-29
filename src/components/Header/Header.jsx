import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderFlex,
  Logo,
  Nav,
  BurgerBtn,
  BurgerMenu,
  BurgerNav,
  SvgContainer,
} from "./styles/Header.styled";
import { Container } from "../Container/Container";
import { IoClose as CrossIcon } from "react-icons/io5";
import { GiHamburgerMenu as BurgerIcon } from "react-icons/gi";
import logoImage from "../../assets/images/logo.webp";

export const Header = () => {
  const [isMenuOpen, setManuOpen] = useState(false);

  const toggleOpen = () => {
    setManuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderFlex>
          <Logo>
            <img src={logoImage} alt="Logo" />
            <Link to="/">
              <span>RoomCraft</span>
            </Link>
          </Logo>

          <Nav>
            <Link to="/">Головна</Link>
            <Link to="/build">Редактор</Link>
            <Link to="/contacts">Контакти</Link>
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
                Головна
              </Link>
              <Link onClick={toggleOpen} to="/build">
                Редактор
              </Link>
              <Link onClick={toggleOpen} to="/contacts">
                Контакти
              </Link>
            </BurgerNav>
          </BurgerMenu>
        </HeaderFlex>
      </Container>
    </HeaderContainer>
  );
};
