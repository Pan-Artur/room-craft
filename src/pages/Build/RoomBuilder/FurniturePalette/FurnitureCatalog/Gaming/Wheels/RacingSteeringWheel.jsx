import styled from 'styled-components';

export const RacingSteeringWheel = () => {
  return (
    <RacingWheelContainer>
      <RacingWheel>
        <RacingHub />
        <RacingGrip $position="top" />
        <RacingGrip $position="right" />
        <RacingGrip $position="bottom" />
        <RacingGrip $position="left" />
      </RacingWheel>
      <RacingButtons>
        <RacingButton />
        <RacingButton />
      </RacingButtons>
    </RacingWheelContainer>
  );
};

const RacingWheelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const RacingWheel = styled.div`
  width: 85%;
  height: 85%;
  border: 4% solid #E74C3C;
  border-radius: 50%;
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`;

const RacingHub = styled.div`
  width: 20%;
  height: 20%;
  background-color: #2C3E50;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RacingGrip = styled.div`
  width: 15%;
  height: 30%;
  background-color: #E74C3C;
  border-radius: 8%;
  position: absolute;
  ${props => {
    switch(props.$position) {
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
  gap: 7%;
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
`;

const RacingButton = styled.div`
  width: 8%;
  height: 8%;
  background-color: #3498DB;
  border-radius: 50%;
`;