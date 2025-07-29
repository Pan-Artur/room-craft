import styled from 'styled-components';

export const GridContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  min-width: 500px;
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1px;
  background-color: ${props => props.$gridColor};
  border: 1px solid #E0E0E0;
  background-color: ${props => props.$floorColor};
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const GridCell = styled.div`
  position: relative;
  background-color: ${props => props.$isOver ? 'rgba(100, 181, 246, 0.1)' : props.$floorColor || '#FFFFFF'};
  border: 1px solid ${props => props.$gridColor || '#E0E0E0'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.$isOver ? 'rgba(100, 181, 246, 0.2)' : '#F5F5F5'};
  }
`;

export const GridCoordinates = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 8px;
  color: #616161;
  opacity: 0.5;
  pointer-events: none;
`;