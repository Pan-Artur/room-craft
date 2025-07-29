import styled from "styled-components";

export const Section = styled.section`
  background-color: #f5f5f5;
  padding: 40px 0;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    gap: 32px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 90%;
  max-width: 280px;
  padding: 20px;
  text-align: center;
  transition: transform 250ms ease, box-shadow 250ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 300px;
  }
`;

export const Icon = styled.div`
  font-size: 40px;
  color: #64b5f6;
  margin-bottom: 12px;
  transition: color 250ms ease;

  ${Card}:hover & {
    color: #4db6ac;
  }
`;

export const Title = styled.h3`
  font-size: 21px;
  margin-bottom: 8px;
  color: #333333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666666;
`;
