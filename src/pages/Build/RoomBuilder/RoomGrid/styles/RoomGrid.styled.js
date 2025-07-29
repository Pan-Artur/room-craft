import styled from 'styled-components';

export const RoomGridContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #F5F5F5;
  overflow: auto;
`;

export const GridContainer = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1px;
  background-color: ${props => props.$gridColor};
  border: 1px solid #BDBDBD;
  background-color: ${props => props.$floorColor};
  opacity: ${props => props.$isOver ? 0.8 : 1};
`;

export const GridCell = styled.div`
  background-color: ${props => props.$floorColor};
  border: 1px solid ${props => props.$gridColor};
`;
