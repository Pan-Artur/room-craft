import styled from 'styled-components';

export const CactusPlant = () => {
  return (
    <CactusContainer>
      <CactusBody>
        <CactusArm $left />
        <CactusArm $right />
      </CactusBody>
      <PlantPot />
    </CactusContainer>
  );
};

const CactusContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const PlantPot = styled.div`
  width: 60%;
  height: 25%;
  background-color: #A0522D;
  border-radius: 0 0 5px 5px;
  position: relative;
`;

const CactusBody = styled.div`
  width: 40%;
  height: 50%;
  background-color: #2E8B57;
  border-radius: 10px;
  position: relative;
  margin-bottom: -5%;
`;

const CactusArm = styled.div`
  width: 30%;
  height: 40%;
  background-color: #2E8B57;
  border-radius: 5px;
  position: absolute;
  top: 30%;
  ${props => props.$left && 'left: -20%;'}
  ${props => props.$right && 'right: -20%;'}
`;