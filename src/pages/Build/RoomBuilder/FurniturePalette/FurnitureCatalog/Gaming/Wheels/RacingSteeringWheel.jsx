import styled from 'styled-components';

export const RacingSteeringWheel = () => {
  return (
    <RacingWheelContainer>
      <RacingWheel>
        <RacingHub />
        <RacingGrip position="top" />
        <RacingGrip position="right" />
        <RacingGrip position="bottom" />
        <RacingGrip position="left" />
      </RacingWheel>
      <RacingButtons>
        <RacingButton />
        <RacingButton />
      </RacingButtons>
    </RacingWheelContainer>
  );
};

const RacingWheelContainer = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
`;

const RacingWheel = styled.div`
  width: 120px;
  height: 120px;
  border: 6px solid #E74C3C;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const RacingHub = styled.div`
  width: 30px;
  height: 30px;
  background-color: #2C3E50;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RacingGrip = styled.div`
  width: 20px;
  height: 40px;
  background-color: #E74C3C;
  border-radius: 10px;
  position: absolute;
  ${props => {
    switch(props.position) {
      case 'top': return 'top: 0; left: 50%; transform: translateX(-50%);';
      case 'right': return 'top: 50%; right: 0; transform: translateY(-50%);';
      case 'bottom': return 'bottom: 0; left: 50%; transform: translateX(-50%);';
      case 'left': return 'top: 50%; left: 0; transform: translateY(-50%);';
      default: return '';
    }
  }}
`;

const RacingButtons = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
`;

const RacingButton = styled.div`
  width: 12px;
  height: 12px;
  background-color: #3498DB;
  border-radius: 50%;
`;