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
  width: 200px;
  height: 120px;
  position: relative;
`;

const TableSurface = styled.div`
  width: 180px;
  height: 100px;
  background-color: #2F4F4F;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const DrawerSection = styled.div`
  width: 180px;
  height: 20px;
  background-color: #1E3A3A;
  position: absolute;
  top: 90px;
  left: 10px;
`;