import styled from 'styled-components';

export const ClassicSofa = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <ClassicSofaContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <SofaBase />
      <SofaBack />
      <SofaArmrest $left />
      <SofaArmrest $right />
    </ClassicSofaContainer>
  );
};

const ClassicSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ $vertical }) => ($vertical ? '1 / 2' : '2 / 1')};
  position: relative;
  transition: transform 0.3s ease;
`;

const SofaBase = styled.div`
  width: 90%;
  height: 65%;
  background-color: #8b4513;
  border-radius: 8%;
  position: absolute;
  top: 35%;
  left: 5%;
`;

const SofaBack = styled.div`
  width: 90%;
  height: 15%;
  background-color: #654321;
  border-radius: 8% 8% 0 0;
  position: absolute;
  top: 20%;
  left: 5%;
`;

const SofaArmrest = styled.div`
  width: 10%;
  height: 50%;
  background-color: #654321;
  border-radius: 4%;
  position: absolute;
  top: 25%;
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
`;