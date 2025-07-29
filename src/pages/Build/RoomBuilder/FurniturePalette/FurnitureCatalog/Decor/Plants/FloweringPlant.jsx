import styled from 'styled-components';

export const FloweringPlant = () => {
  return (
    <FlowerContainer>
      <FlowerPot />
      <Stem />
      <LeafPair />
      <Flower />
    </FlowerContainer>
  );
};

const FlowerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const FlowerPot = styled.div`
  width: 60%;
  height: 25%;
  background-color: #CD853F;
  border-radius: 0 0 10% 10%;
  position: relative;
`;

const Stem = styled.div`
  width: 6%;
  height: 50%;
  background-color: #228B22;
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
`;

const LeafPair = styled.div`
  width: 60%;
  height: 20%;
  position: absolute;
  bottom: 40%;
  left: 20%;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 25%;
    height: 15%;
    background-color: #228B22;
    border-radius: 50% 0 50% 50%;
  }

  &::before {
    transform: rotate(-30deg);
    left: 0;
  }

  &::after {
    transform: rotate(30deg) scaleX(-1);
    right: 0;
  }
`;

const Flower = styled.div`
  width: 30%;
  height: 30%;
  background-color: #FF69B4;
  border-radius: 50%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    position: absolute;
    width: 33%;
    height: 33%;
    background-color: #FFD700;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;