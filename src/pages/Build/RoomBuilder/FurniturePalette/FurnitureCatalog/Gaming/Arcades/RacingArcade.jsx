import styled from 'styled-components';

export const RacingArcade = () => {
  return (
    <RacingCabinet>
      <Widescreen />
      <SteeringWheel />
      <Pedals>
        <Pedal />
        <Pedal />
      </Pedals>
    </RacingCabinet>
  );
};

const RacingCabinet = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #E60000, #990000);
  border-radius: 10%;
  position: relative;
  box-shadow: 0 3% 8% rgba(0,0,0,0.3);
`;

const Widescreen = styled.div`
  width: 85%;
  height: 40%;
  background-color: #000000;
  border: 2% solid #333333;
  position: absolute;
  top: 10%;
  left: 7.5%;
  &::before {
    content: 'RACING';
    color: #FFFFFF;
    font-family: 'Arial', sans-serif;
    font-size: 70%;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SteeringWheel = styled.div`
  width: 25%;
  height: 25%;
  border: 3% solid #333333;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: 20%;
  &::before {
    content: '';
    position: absolute;
    width: 25%;
    height: 25%;
    background-color: #333333;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Pedals = styled.div`
  display: flex;
  gap: 10%;
  position: absolute;
  bottom: 10%;
  left: 25%;
`;

const Pedal = styled.div`
  width: 13%;
  height: 7%;
  background-color: #333333;
  border-radius: 20%;
`;