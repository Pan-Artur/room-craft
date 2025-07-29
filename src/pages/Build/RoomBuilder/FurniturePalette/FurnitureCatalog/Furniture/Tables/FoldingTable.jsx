import styled from 'styled-components';

export const FoldingTable = () => {
  return (
    <FoldingTableContainer>
      <MainPanel />
      <ExtensionPanel />
      <SupportLeg />
    </FoldingTableContainer>
  );
};

const FoldingTableContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
`;

const MainPanel = styled.div`
  width: 100px;
  height: 100px;
  background-color: #6D4C41;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ExtensionPanel = styled.div`
  width: 60px;
  height: 80px;
  background-color: #5D4037;
  position: absolute;
  top: 20px;
  right: 10px;
`;

const SupportLeg = styled.div`
  width: 5px;
  height: 80px;
  background-color: #4E342E;
  position: absolute;
  top: 20px;
  right: 70px;
`;