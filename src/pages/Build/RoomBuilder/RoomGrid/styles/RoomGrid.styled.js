import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  gap: 1px;
  background-color: ${(props) => props.$gridColor};
  border: 1px solid #e0e0e0;
  background-color: ${(props) => props.$floorColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const GridCell = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  background-color: ${(props) =>
    props.$isOver
      ? "rgba(100, 181, 246, 0.1)"
      : props.$floorColor || "#FFFFFF"};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$isOver ? "rgba(100, 181, 246, 0.2)" : "#F5F5F5"};
  }
`;
