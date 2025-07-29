import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentColumn = styled.div`
  max-width: 500px;
`;

export const ImageColumn = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    margin-top: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #212529;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #495057;
  margin-bottom: 32px;
  line-height: 1.6;
`;

export const FeaturesList = styled.ul`
  margin: 32px 0;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  margin-bottom: 12.8px;
  padding-left: 24px;
  position: relative;
  font-size: 16px;
  color: #495057;
  line-height: 24px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4db6ac;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin: 32px 0;
`;

export const StatItem = styled.div`
  span {
    font-size: 24px;
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
  padding: 12px 32px;
  background: #4db6ac;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
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