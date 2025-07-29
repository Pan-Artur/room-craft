import styled from 'styled-components';

export const ModernLamp = () => {
  return (
    <ModernLampContainer>
      <LampStand />
      <LEDLight />
    </ModernLampContainer>
  );
};

const ModernLampContainer = styled.div`
  width: 80px;
  height: 100px;
  position: relative;
`;

const LampStand = styled.div`
  width: 10px;
  height: 70px;
  background-color: #C0C0C0;
  position: absolute;
  bottom: 0;
  left: 35px;
`;

const LEDLight = styled.div`
  width: 60px;
  height: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  &::before {
    content: '';
    color: #333;
    font-size: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;