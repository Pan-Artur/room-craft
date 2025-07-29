import styled from 'styled-components';

export const ClassicWoodChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Legs>
        {[...Array(4)].map((_, i) => <Leg key={i} />)}
      </Legs>
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Seat = styled.div`
  width: 60%;
  height: 60%;
  background-color: #8b4513;
  border-radius: 10%;
  position: absolute;
  top: 20%;
  left: 20%;
  z-index: 2;
`;

const Back = styled.div`
  width: 20%;
  height: 60%;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 1;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Leg = styled.div`
  width: 10%;
  height: 10%;
  background-color: #5D4037;
  position: absolute;
  
  &:nth-child(1) { bottom: 0; left: 15%; }
  &:nth-child(2) { bottom: 0; right: 15%; }
  &:nth-child(3) { top: 70%; left: 15%; }
  &:nth-child(4) { top: 70%; right: 15%; }
`;