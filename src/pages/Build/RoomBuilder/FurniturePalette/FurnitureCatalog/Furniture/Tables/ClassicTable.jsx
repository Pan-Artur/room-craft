import styled from 'styled-components';

export const ClassicTable = () => {
  return (
    <ClassicTableContainer>
      <TableTop />
      <TableLeg $left $top />
      <TableLeg $right $top />
      <TableLeg $left $bottom />
      <TableLeg $right $bottom />
    </ClassicTableContainer>
  );
};

const ClassicTableContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const TableTop = styled.div`
  width: 85%;
  height: 85%;
  background-color: #8B4513;
  border: 2% solid #654321;
  border-radius: 5%;
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`;

const TableLeg = styled.div`
  width: 7%;
  height: 7%;
  background-color: #654321;
  position: absolute;
  top: ${props => props.$top ? '3%' : props.$bottom ? '88%' : '0'};
  left: ${props => props.$left ? '3%' : props.$right ? '88%' : '0'};
`;