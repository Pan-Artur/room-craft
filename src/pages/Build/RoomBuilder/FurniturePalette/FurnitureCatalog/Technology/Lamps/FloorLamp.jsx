import styled from 'styled-components';

export const FloorLamp = () => {
  return (
    <FloorLampContainer>
      <LampFoot />
      <LongStand />
      <LargeShade />
    </FloorLampContainer>
  );
};

const FloorLampContainer = styled.div`
  width: 80px;
  height: 180px;
  position: relative;
`;

const LampFoot = styled.div`
  width: 70px;
  height: 10px;
  background-color: #333;
  position: absolute;
  bottom: 0;
  left: 5px;
`;

const LongStand = styled.div`
  width: 6px;
  height: 120px;
  background-color: #555;
  position: absolute;
  bottom: 10px;
  left: 37px;
`;

const LargeShade = styled.div`
  width: 70px;
  height: 40px;
  background-color: #E0E0E0;
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 20px;
  left: 5px;
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    top: 5px;
    left: 5px;
    border-radius: 10px 10px 0 0;
  }
`;