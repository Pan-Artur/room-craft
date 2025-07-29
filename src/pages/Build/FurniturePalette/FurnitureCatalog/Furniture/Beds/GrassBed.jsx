import styled from 'styled-components';

export const GrassBed = () => {
  return (
    <BedContainer>
      <Soil />
      <Grass>
        {[...Array(30)].map((_, i) => <Blade key={i} />)}
      </Grass>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
`;

const Soil = styled.div`
  width: 160px;
  height: 100px;
  background-color: #5D4037;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Grass = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Blade = styled.div`
  width: 2px;
  height: ${() => Math.floor(Math.random() * 15) + 5}px;
  background-color: #4CAF50;
  position: absolute;
  bottom: 60px;
  left: ${() => Math.floor(Math.random() * 160) + 10}px;
  transform: rotate(${() => Math.floor(Math.random() * 30) - 15}deg);
`;
