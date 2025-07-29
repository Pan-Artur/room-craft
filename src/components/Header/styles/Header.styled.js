import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 15px 0;

  display: flex;
  align-items: center;
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.p`
  font-size: 26px;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 35px;
  }

  & * {
    color: #000;
    font-size: 18px;
    font-weight: 500;

    transition: color 250ms ease;

    &:hover,
    &:focus {
      color: #4db6ac;
    }
  }
`;

export const BurgerBtn = styled.button`
  width: 32px;
  height: 32px;

  background: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }

  & * {
    width: 100%;
    height: 100%;
  }
`;

export const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  padding: 100px 0 0 0;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  & * {
    color: #000;
    font-size: 22px;
    font-weight: 500;

    transition: color 250ms ease;

    &:hover,
    &:focus {
      color: #4db6ac;
    }
  }
`;

export const SvgContainer = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 32px;
  height: 32px;

  background: transparent;

  & * {
    width: 100%;
    height: 100%;
  }
`;
