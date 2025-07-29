import styled from 'styled-components';

export const OfficeChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Base />
      <Wheels>
        <Wheel />
        <Wheel />
        <Wheel />
        <Wheel />
        <Wheel />
      </Wheels>
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const Seat = styled.div`
  width: 70px;
  height: 70px;
  background-color: #607D8B;
  border-radius: 5px;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
`;

const Back = styled.div`
  width: 70px;
  height: 20px;
  background-color: #455A64;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 1;
`;

const Base = styled.div`
  width: 20px;
  height: 20px;
  background-color: #263238;
  border-radius: 50%;
  position: absolute;
  bottom: 25px;
  left: 40px;
  z-index: 1;
`;

const Wheels = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wheel = styled.div`
  width: 8px;
  height: 8px;
  background-color: #212121;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  
  &:nth-child(1) { left: 15px; }
  &:nth-child(2) { right: 15px; }
  &:nth-child(3) { left: 25px; bottom: 15px; }
  &:nth-child(4) { right: 25px; bottom: 15px; }
  &:nth-child(5) { left: 46px; bottom: 5px; }
`;
