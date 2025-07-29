import styled from 'styled-components';

export const RockingChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Rocker />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Seat = styled.div`
  width: 60%;
  height: 50%;
  background-color: #A1887F;
  border-radius: 5%;
  position: absolute;
  top: 25%;
  left: 20%;
  z-index: 2;
`;

const Back = styled.div`
  width: 60%;
  height: 35%;
  background-color: #8D6E63;
  border-radius: 5% 5% 0 0;
  position: absolute;
  top: 0;
  left: 20%;
  z-index: 1;
`;

const Rocker = styled.div`
  width: 80%;
  height: 12%;
  background-color: #5D4037;
  border-radius: 50% / 100%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  position: absolute;
  bottom: 0;
  left: 10%;
`;