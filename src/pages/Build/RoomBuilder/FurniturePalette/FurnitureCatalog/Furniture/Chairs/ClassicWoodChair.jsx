import styled from 'styled-components';

export const ClassicWoodChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Legs>
        <Leg />
        <Leg />
        <Leg />
        <Leg />
      </Legs>
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const Seat = styled.div`
  width: 60px;
  height: 60px;
  background-color: #8b4513;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

const Back = styled.div`
  width: 20px;
  height: 60px;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 1;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Leg = styled.div`
  width: 10px;
  height: 10px;
  background-color: #5D4037;
  position: absolute;
  
  &:nth-child(1) { bottom: 0; left: 15px; }
  &:nth-child(2) { bottom: 0; right: 15px; }
  &:nth-child(3) { top: 70px; left: 15px; }
  &:nth-child(4) { top: 70px; right: 15px; }
`;
