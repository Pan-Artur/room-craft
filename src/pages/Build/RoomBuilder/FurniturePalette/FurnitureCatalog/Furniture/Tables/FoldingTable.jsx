import styled from 'styled-components';

export const FoldingTable = ({ rotation = 0 }) => {
  return (
    <FoldingTableContainer style={{ transform: `rotate(${rotation}deg)` }}>
      <MainPanel />
      <ExtensionPanel />
      <SupportLeg />
    </FoldingTableContainer>
  );
};

const FoldingTableContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`;

const MainPanel = styled.div`
  width: 55%;
  height: 80%;
  background-color: #6D4C41;
  position: absolute;
  top: 10%;
  left: 5%;
`;

const ExtensionPanel = styled.div`
  width: 35%;
  height: 65%;
  background-color: #5D4037;
  position: absolute;
  top: 17%;
  right: 5%;
`;

const SupportLeg = styled.div`
  width: 3%;
  height: 65%;
  background-color: #4E342E;
  position: absolute;
  top: 17%;
  right: 40%;
`;