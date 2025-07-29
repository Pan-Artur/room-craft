import styled from 'styled-components';

export const SportSteeringWheel = () => {
  return (
    <SteeringWheelContainer>
      <WheelRing>
        <WheelHub />
        <WheelSpoke $rotate="0" />
        <WheelSpoke $rotate="45deg" />
        <WheelSpoke $rotate="90deg" />
        <WheelSpoke $rotate="135deg" />
      </WheelRing>
      <WheelGrip $position="top" />
      <WheelGrip $position="bottom" />
    </SteeringWheelContainer>
  );
};

const SteeringWheelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WheelRing = styled.div`
  width: 80%;
  height: 80%;
  border: 6% solid #333;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 10%;
`;

const WheelHub = styled.div`
  width: 15%;
  height: 15%;
  background-color: #555;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WheelSpoke = styled.div`
  width: 1.5%;
  height: 35%;
  background-color: #444;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.$rotate || '0'});
  transform-origin: center top;
`;

const WheelGrip = styled.div`
  width: 25%;
  height: 8%;
  background-color: #222;
  border-radius: 4%;
  position: absolute;
  top: ${props => props.$position === 'top' ? '5%' : '87%'};
  left: 50%;
  transform: translateX(-50%);
`;