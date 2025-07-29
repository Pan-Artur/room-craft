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
  width: 150px;
  height: 140px;
  background: linear-gradient(145deg, #E60000, #990000);
  border-radius: 15px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

const Widescreen = styled.div`
  width: 130px;
  height: 60px;
  background-color: #000000;
  border: 3px solid #333333;
  position: absolute;
  top: 15px;
  left: 10px;
  &::before {
    content: 'RACING';
    color: #FFFFFF;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SteeringWheel = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #333333;
  border-radius: 50%;
  position: absolute;
  top: 80px;
  left: 30px;
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #333333;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Pedals = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 15px;
  left: 40px;
`;

const Pedal = styled.div`
  width: 20px;
  height: 10px;
  background-color: #333333;
  border-radius: 3px;
`;