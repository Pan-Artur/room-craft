import styled from 'styled-components';

export const DesktopPC = () => {
  return (
    <DesktopContainer>
      <Monitor>
        <Screen />
        <Stand />
      </Monitor>
      <Keyboard />
      <Mouse />
    </DesktopContainer>
  );
};

const DesktopContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Monitor = styled.div`
  width: 60%;
  height: 50%;
  background-color: #333;
  border-radius: 3%;
  position: absolute;
  top: 10%;
  left: 20%;
`;

const Screen = styled.div`
  width: 90%;
  height: 80%;
  background-color: #0066CC;
  border: 1.5% solid #000;
  position: absolute;
  top: 10%;
  left: 5%;
  &::after {
    content: '';
    color: white;
    font-size: 40%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`;

const Stand = styled.div`
  width: 15%;
  height: 5%;
  background-color: #555;
  position: absolute;
  bottom: -5%;
  left: 42.5%;
`;

const Keyboard = styled.div`
  width: 50%;
  height: 15%;
  background-color: #444;
  border-radius: 2%;
  position: absolute;
  bottom: 25%;
  left: 25%;
`;

const Mouse = styled.div`
  width: 12.5%;
  height: 20%;
  background-color: #666;
  border-radius: 8% 8% 0 0;
  position: absolute;
  bottom: 15%;
  right: 20%;
`;