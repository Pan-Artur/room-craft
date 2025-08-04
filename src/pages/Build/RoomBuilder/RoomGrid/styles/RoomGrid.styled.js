import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.$floorColor};
  background-image: 
    linear-gradient(${props => props.$gridColor} 1px, transparent 1px),
    linear-gradient(90deg, ${props => props.$gridColor} 1px, transparent 1px);
  background-size: calc(100% / 6) calc(100% / 6);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const GridCell = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${props => 
    props.$isSelected ? "rgba(77, 182, 172, 0.2)" :
    props.$isFree ? "transparent" : "rgba(0, 0, 0, 0.02)"};
  pointer-events: ${props => props.$isFree ? "auto" : "none"};
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: ${props => 
      props.$isFree ? "rgba(77, 182, 172, 0.1)" : "rgba(0, 0, 0, 0.02)"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
`;