import styled from 'styled-components';

export const ModernSofa = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <ModernSofaContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <ModernSofaBase />
      <ModernSofaBack />
    </ModernSofaContainer>
  );
};

const ModernSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ $vertical }) => ($vertical ? '1 / 2' : '2 / 1')};
  position: relative;
  transition: transform 0.3s ease;
`;

const ModernSofaBase = styled.div`
  width: 90%;
  height: 70%;
  background-color: #2c3e50;
  border-radius: 12%;
  position: absolute;
  top: 30%;
  left: 5%;
`;

const ModernSofaBack = styled.div`
  width: 90%;
  height: 12%;
  background-color: #34495e;
  border-radius: 12% 12% 0 0;
  position: absolute;
  top: 18%;
  left: 5%;
`;