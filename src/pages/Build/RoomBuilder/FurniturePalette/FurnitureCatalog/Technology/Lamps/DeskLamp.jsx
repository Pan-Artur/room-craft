import styled from 'styled-components';

export const DeskLamp = () => {
  return (
    <LampContainer>
      <LampBase />
      <LampNeck />
      <LampShade />
    </LampContainer>
  );
};

const LampContainer = styled.div`
  width: 100px;
  height: 120px;
  position: relative;
`;

const LampBase = styled.div`
  width: 60px;
  height: 10px;
  background-color: #8B4513;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 20px;
`;

const LampNeck = styled.div`
  width: 8px;
  height: 60px;
  background-color: #654321;
  position: absolute;
  bottom: 10px;
  left: 46px;
`;

const LampShade = styled.div`
  width: 50px;
  height: 30px;
  background-color: #D2B48C;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 20px;
  left: 25px;
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 5px;
    background-color: #FFD700;
    top: 15px;
    left: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px #FFD700;
  }
`;