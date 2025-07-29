import styled from 'styled-components';

export const OfficeTable = () => {
  return (
    <OfficeTableContainer>
      <TableSurface />
      <DrawerSection />
    </OfficeTableContainer>
  );
};

const OfficeTableContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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