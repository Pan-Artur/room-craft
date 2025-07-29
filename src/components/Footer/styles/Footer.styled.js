import styled, { keyframes } from "styled-components";

export const FooterSection = styled.footer`
  background-color: #212121;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: #cccccc;
  font-size: 15px;
  box-shadow: inset 0 4px 8px rgba(255, 255, 255, 0.05);
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Anchor = styled.a`
  color: #4db6ac;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #64b5f6;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #64b5f6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const githubHover = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

export const GithubLink = styled.a`
  color: #4db6ac;
  font-size: 32px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #64b5f6;
    animation: ${githubHover} 0.6s ease forwards;
  }
`;

export const Authors = styled.div`
  color: #888888;
  font-style: italic;
  font-size: 14px;
  letter-spacing: 0.05em;
`;