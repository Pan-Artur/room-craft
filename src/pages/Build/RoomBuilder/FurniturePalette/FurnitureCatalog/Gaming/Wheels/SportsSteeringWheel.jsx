import styled from 'styled-components';

export const SportSteeringWheel = () => {
  return (
    <SteeringWheelContainer>
      <WheelRing>
        <WheelHub />
        <WheelSpoke />
        <WheelSpoke rotate="45deg" />
        <WheelSpoke rotate="90deg" />
        <WheelSpoke rotate="135deg" />
      </WheelRing>
      <WheelGrip position="top" />
      <WheelGrip position="bottom" />
    </SteeringWheelContainer>
  );
};

const SteeringWheelContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const WheelRing = styled.div`
  width: 100px;
  height: 100px;
  border: 8px solid #333;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const WheelHub = styled.div`
  width: 20px;
  height: 20px;
  background-color: #555;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WheelSpoke = styled.div`
  width: 2px;
  height: 40px;
  background-color: #444;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.rotate || '0'});
  transform-origin: center top;
`;

const WheelGrip = styled.div`
  width: 30px;
  height: 10px;
  background-color: #222;
  border-radius: 5px;
  position: absolute;
  top: ${props => props.position === 'top' ? '5px' : '105px'};
  left: 50%;
  transform: translateX(-50%);
`;