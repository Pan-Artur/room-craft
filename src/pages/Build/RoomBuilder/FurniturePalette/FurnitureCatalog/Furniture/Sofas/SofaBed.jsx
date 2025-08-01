import styled from 'styled-components';

export const SofaBed = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <SofaBedContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <BedBase />
      <BedBack />
      <BedPillow />
    </SofaBedContainer>
  );
};

const SofaBedContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ $vertical }) => ($vertical ? '1 / 2' : '2 / 1')};
  position: relative;
  transition: transform 0.3s ease;
`;

const BedBase = styled.div`
  width: 90%;
  height: 75%;
  background-color: #6d4c41;
  border-radius: 4%;
  position: absolute;
  top: 25%;
  left: 5%;
`;

const BedBack = styled.div`
  width: 90%;
  height: 12%;
  background-color: #5d4037;
  border-radius: 4% 4% 0 0;
  position: absolute;
  top: 13%;
  left: 5%;
`;

const BedPillow = styled.div`
  width: 25%;
  height: 30%;
  background-color: #8d6e63;
  border-radius: 8%;
  position: absolute;
  top: 5%;
  left: 10%;
`;