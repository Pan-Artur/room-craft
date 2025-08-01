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
`;

export const GridCell = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${(props) =>
    props.$isFree
      ? "transparent"
      : "rgba(0, 0, 0, 0.02)"}; 
  pointer-events: ${(props) =>
    props.$isFree ? "auto" : "none"};
  border: 1px solid #ccc;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$isFree ? "#f5f5f5" : "rgba(0, 0, 0, 0.02)"};
  }
`;
