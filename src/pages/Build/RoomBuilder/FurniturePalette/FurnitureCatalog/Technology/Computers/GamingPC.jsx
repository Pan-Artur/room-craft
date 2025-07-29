import styled from 'styled-components';

export const GamingPC = () => {
  return (
    <GamingPCContainer>
      <TowerCase>
        <RGBLight />
        <Ventilation />
      </TowerCase>
      <Monitor>
        <Screen />
      </Monitor>
    </GamingPCContainer>
  );
};

const GamingPCContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
`;

const TowerCase = styled.div`
  width: 60px;
  height: 100px;
  background-color: #1A1A1A;
  border: 2px solid #FF4500;
  position: absolute;
  bottom: 0;
  left: 20px;
`;

const RGBLight = styled.div`
  width: 5px;
  height: 80px;
  background: linear-gradient(to bottom, #FF0000, #00FF00, #0000FF);
  position: absolute;
  right: -7px;
  top: 10px;
`;

const Ventilation = styled.div`
  width: 50px;
  height: 10px;
  background-color: #333;
  position: absolute;
  top: 10px;
  left: 5px;
  &::after, &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 10px;
    background-color: #333;
  }
  &::after { top: 15px; }
  &::before { top: 30px; }
`;

const Monitor = styled.div`
  width: 100px;
  height: 80px;
  background-color: #111;
  border: 3px solid #FF4500;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Screen = styled.div`
  width: 90px;
  height: 70px;
  background-color: #000;
  border: 2px solid #FF4500;
  position: absolute;
  top: 5px;
  left: 5px;
  &::after {
    content: '';
    color: #FF4500;
    font-size: 8px;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;