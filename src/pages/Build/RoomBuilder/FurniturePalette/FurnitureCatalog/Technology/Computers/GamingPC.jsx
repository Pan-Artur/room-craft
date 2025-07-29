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
  width: 100%;
  height: 100%;
  position: relative;
`;

const TowerCase = styled.div`
  width: 30%;
  height: 65%;
  background-color: #1A1A1A;
  border: 1.5% solid #FF4500;
  position: absolute;
  bottom: 0;
  left: 10%;
`;

const RGBLight = styled.div`
  width: 2.5%;
  height: 55%;
  background: linear-gradient(to bottom, #FF0000, #00FF00, #0000FF);
  position: absolute;
  right: -3.5%;
  top: 10%;
`;

const Ventilation = styled.div`
  width: 25%;
  height: 5%;
  background-color: #333;
  position: absolute;
  top: 10%;
  left: 2.5%;
  &::after, &::before {
    content: '';
    position: absolute;
    width: 25%;
    height: 5%;
    background-color: #333;
  }
  &::after { top: 15%; }
  &::before { top: 30%; }
`;

const Monitor = styled.div`
  width: 50%;
  height: 55%;
  background-color: #111;
  border: 2% solid #FF4500;
  position: absolute;
  top: 10%;
  right: 10%;
`;

const Screen = styled.div`
  width: 90%;
  height: 85%;
  background-color: #000;
  border: 1.5% solid #FF4500;
  position: absolute;
  top: 5%;
  left: 5%;
  &::after {
    content: '';
    color: #FF4500;
    font-size: 40%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`;