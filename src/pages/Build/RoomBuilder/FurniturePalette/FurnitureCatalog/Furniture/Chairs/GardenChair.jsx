import styled from 'styled-components';

export const GardenChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Hole />
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
  background-color: #00BCD4;
  border-radius: 10%;
  position: absolute;
  top: 15%;
  left: 15%;
`;

const Back = styled.div`
  width: 70%;
  height: 20%;
  background-color: #0097A7;
  border-radius: 10% 10% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
`;

const Hole = styled.div`
  width: 40%;
  height: 40%;
  background-color: #B2EBF2;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 30%;
`;