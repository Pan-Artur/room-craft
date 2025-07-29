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
  width: 200px;
  height: 180px;
  position: relative;
`;

const Monitor = styled.div`
  width: 120px;
  height: 90px;
  background-color: #333;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 40px;
`;

const Screen = styled.div`
  width: 110px;
  height: 70px;
  background-color: #0066CC;
  border: 2px solid #000;
  position: absolute;
  top: 10px;
  left: 5px;
  &::after {
    content: '';
    color: white;
    font-size: 8px;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;

const Stand = styled.div`
  width: 30px;
  height: 10px;
  background-color: #555;
  position: absolute;
  bottom: -10px;
  left: 45px;
`;

const Keyboard = styled.div`
  width: 100px;
  height: 30px;
  background-color: #444;
  border-radius: 3px;
  position: absolute;
  bottom: 40px;
  left: 50px;
`;

const Mouse = styled.div`
  width: 25px;
  height: 40px;
  background-color: #666;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 30px;
  right: 40px;
`;