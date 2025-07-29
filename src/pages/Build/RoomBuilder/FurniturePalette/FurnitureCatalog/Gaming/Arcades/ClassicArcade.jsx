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
  width: 120px;
  height: 180px;
  background-color: #1A1A1A;
  border-radius: 10px;
  position: relative;
  border: 4px solid #FFD700;
`;

const ArcadeScreen = styled.div`
  width: 90px;
  height: 70px;
  background-color: #000080;
  border: 3px solid #C0C0C0;
  position: absolute;
  top: 20px;
  left: 15px;
  &::before {
    content: 'PAC-MAN';
    color: #FFFF00;
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ControlPanel = styled.div`
  width: 100px;
  height: 40px;
  background-color: #333333;
  position: absolute;
  bottom: 20px;
  left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Joystick = styled.div`
  width: 25px;
  height: 25px;
  background-color: #808080;
  border-radius: 50%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${props => props.color || '#FF0000'};
  border-radius: 50%;
`;