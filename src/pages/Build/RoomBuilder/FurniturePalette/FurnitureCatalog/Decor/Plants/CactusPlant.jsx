import styled from 'styled-components';

export const CactusPlant = () => {
  return (
    <CactusContainer>
      <PlantPot />
      <CactusBody />
      <CactusArm right />
      <CactusArm left />
    </CactusContainer>
  );
};

const CactusContainer = styled.div`
  width: 100px;
  height: 120px;
  position: relative;
`;

const PlantPot = styled.div`
  width: 60px;
  height: 40px;
  background-color: #A0522D;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  left: 20px;
`;

const CactusBody = styled.div`
  width: 40px;
  height: 60px;
  background-color: #2E8B57;
  border-radius: 20px;
  position: absolute;
  bottom: 40px;
  left: 30px;
`;

const CactusArm = styled.div`
  width: 20px;
  height: 30px;
  background-color: #2E8B57;
  border-radius: 10px;
  position: absolute;
  bottom: 60px;
  left: ${props => props.left ? '10px' : 'auto'};
  right: ${props => props.right ? '10px' : 'auto'};
`;