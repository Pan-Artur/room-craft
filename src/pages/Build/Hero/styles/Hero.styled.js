import styled from "styled-components";
import bgImage from "../../../../assets/images/BuildHero/bg.webp";

export const HeroSection = styled.section`
  position: relative;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  margin-bottom: 40px;
  color: white;
  overflow: hidden;

  @media (min-width: 480px) {
    padding: 120px 0;
  }

  @media (min-width: 768px) {
    padding: 150px 0;
  }

  @media (min-width: 1024px) {
    padding: 180px 0;
    margin-bottom: 60px;
  }
`;


export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 16px;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  margin: 0 auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
