import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 40px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const ContentColumn = styled.div`
  max-width: 500px;
`;

export const ImageColumn = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    max-width: 400px;
    margin-top: 0;
  }

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #212529;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (min-width: 576px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #495057;
  margin-bottom: 24px;
  line-height: 1.6;
`;

export const FeaturesList = styled.ul`
  margin: 24px 0;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
  font-size: 15px;
  color: #495057;
  line-height: 22px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4db6ac;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;

  @media (min-width: 576px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const StatItem = styled.div`
  span {
    font-size: 20px;
    font-weight: 700;
    color: #212529;
    display: block;
  }

  p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #6c757d;
  }
`;

export const CTAButton = styled.button`
  padding: 10px 24px;
  background: #4db6ac;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '→';
    margin-left: 8px;
    transition: transform 300ms ease;
  }

  &:hover {
    background: #3da89e;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:hover::after {
    transform: translateX(4px);
  }

  &:active {
    transform: translateY(0);
  }
`;
