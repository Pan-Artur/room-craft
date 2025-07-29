import styled from 'styled-components';

export const ClassicTable = () => {
  return (
    <ClassicTableContainer>
      <TableTop />
      <TableLeg left top />
      <TableLeg right top />
      <TableLeg left bottom />
      <TableLeg right bottom />
    </ClassicTableContainer>
  );
};

const ClassicTableContainer = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
`;

const TableTop = styled.div`
  width: 140px;
  height: 140px;
  background-color: #8B4513;
  border: 3px solid #654321;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const TableLeg = styled.div`
  width: 12px;
  height: 12px;
  background-color: #654321;
  position: absolute;
  top: ${props => props.top ? '5px' : props.bottom ? '143px' : '0'};
  left: ${props => props.left ? '5px' : props.right ? '143px' : '0'};
`;