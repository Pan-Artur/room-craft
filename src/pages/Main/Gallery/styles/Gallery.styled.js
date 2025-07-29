import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 0;
  background-color: #ffffff;
`;

export const Heading = styled.h2`
  font-size: 24px;
  color: #212529;
  text-align: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms ease, box-shadow 250ms ease;

  aspect-ratio: 4 / 3;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.03);
    }
  }
`;

export const Label = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
`;
