import styled from 'styled-components';

export const OfficeChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Base />
      <Wheels>
        {[...Array(5)].map((_, i) => <Wheel key={i} />)}
      </Wheels>
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Seat = styled.div`
  width: 70%;
  height: 70%;
  background-color: #607D8B;
  border-radius: 5%;
  position: absolute;
  top: 15%;
  left: 15%;
  z-index: 2;
`;

const Back = styled.div`
  width: 70%;
  height: 20%;
  background-color: #455A64;
  border-radius: 5% 5% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
  z-index: 1;
`;

const Base = styled.div`
  width: 20%;
  height: 20%;
  background-color: #263238;
  border-radius: 50%;
  position: absolute;
  bottom: 25%;
  left: 40%;
  z-index: 1;
`;

const Wheels = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Wheel = styled.div`
  width: 8%;
  height: 8%;
  background-color: #212121;
  border-radius: 50%;
  position: absolute;
  bottom: 10%;
  
  &:nth-child(1) { left: 15%; }
  &:nth-child(2) { right: 15%; }
  &:nth-child(3) { left: 25%; bottom: 15%; }
  &:nth-child(4) { right: 25%; bottom: 15%; }
  &:nth-child(5) { left: 46%; bottom: 5%; }
`;