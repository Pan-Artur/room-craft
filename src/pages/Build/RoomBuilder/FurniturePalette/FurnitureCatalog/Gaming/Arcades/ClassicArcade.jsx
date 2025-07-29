import styled from 'styled-components';

export const ClassicArcade = () => {
  return (
    <ArcadeCabinet>
      <ArcadeScreen />
      <ControlPanel>
        <Joystick />
        <Buttons>
          <Button color="#FF0000" />
          <Button color="#00FF00" />
          <Button color="#0000FF" />
        </Buttons>
      </ControlPanel>
    </ArcadeCabinet>
  );
};

const ArcadeCabinet = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1A1A1A;
  border-radius: 8%;
  position: relative;
  border: 3% solid #FFD700;
`;

const ArcadeScreen = styled.div`
  width: 75%;
  height: 40%;
  background-color: #000080;
  border: 2% solid #C0C0C0;
  position: absolute;
  top: 10%;
  left: 12.5%;
  &::before {
    content: 'PAC-MAN';
    color: #FFFF00;
    font-family: 'Arial', sans-serif;
    font-size: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ControlPanel = styled.div`
  width: 85%;
  height: 20%;
  background-color: #333333;
  position: absolute;
  bottom: 10%;
  left: 7.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

const Joystick = styled.div`
  width: 20%;
  height: 20%;
  background-color: #808080;
  border-radius: 50%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 40%;
    background-color: #000000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 6%;
`;

const Button = styled.div`
  width: 12%;
  height: 12%;
  background-color: ${props => props.color || '#FF0000'};
  border-radius: 50%;
`;