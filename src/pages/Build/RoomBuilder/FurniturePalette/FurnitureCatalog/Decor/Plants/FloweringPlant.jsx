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
  width: 100px;
  height: 150px;
  position: relative;
`;

const FlowerPot = styled.div`
  width: 60px;
  height: 45px;
  background-color: #CD853F;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  left: 20px;
`;

const Stem = styled.div`
  width: 6px;
  height: 80px;
  background-color: #228B22;
  position: absolute;
  bottom: 45px;
  left: 47px;
`;

const LeafPair = styled.div`
  width: 60px;
  height: 30px;
  position: absolute;
  bottom: 70px;
  left: 20px;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 15px;
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
  width: 30px;
  height: 30px;
  background-color: #FF69B4;
  border-radius: 50%;
  position: absolute;
  top: 25px;
  left: 35px;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFD700;
    border-radius: 50%;
    top: 10px;
    left: 10px;
  }
`;