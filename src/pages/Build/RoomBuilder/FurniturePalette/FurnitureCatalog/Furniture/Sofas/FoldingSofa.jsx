import styled from 'styled-components';

export const FoldingSofa = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <FoldingSofaContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <FoldingBase />
      <FoldingBack />
      <FoldingSeam />
    </FoldingSofaContainer>
  );
};

const FoldingSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ $vertical }) => ($vertical ? '1 / 2' : '2 / 1')};
  position: relative;
  transition: transform 0.3s ease;
`;

const FoldingBase = styled.div`
  width: 90%;
  height: 70%;
  background-color: #3e2723;
  border-radius: 4%;
  position: absolute;
  top: 30%;
  left: 5%;
`;

const FoldingBack = styled.div`
  width: 90%;
  height: 15%;
  background-color: #4e342e;
  border-radius: 4% 4% 0 0;
  position: absolute;
  top: 15%;
  left: 5%;
`;

const FoldingSeam = styled.div`
  width: 3%;
  height: 70%;
  background-color: #5d4037;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;