import styled from 'styled-components';

export const OfficeTable = ({ rotation = 0 }) => {
  return (
    <OfficeTableContainer style={{ transform: `rotate(${rotation}deg)` }}>
      <TableSurface />
      <DrawerSection />
    </OfficeTableContainer>
  );
};

const OfficeTableContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`;

const TableSurface = styled.div`
  width: 90%;
  height: 80%;
  background-color: #2F4F4F;
  position: absolute;
  top: 10%;
  left: 5%;
`;

const DrawerSection = styled.div`
  width: 90%;
  height: 15%;
  background-color: #1E3A3A;
  position: absolute;
  top: 75%;
  left: 5%;
`;