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
  width: 100px;
  height: 80px;
  position: relative;
`;

const Seat = styled.div`
  width: 60px;
  height: 40px;
  background-color: #A1887F;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

const Back = styled.div`
  width: 60px;
  height: 30px;
  background-color: #8D6E63;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 1;
`;

const Rocker = styled.div`
  width: 80px;
  height: 10px;
  background-color: #5D4037;
  border-radius: 50% / 100%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  position: absolute;
  bottom: 0;
  left: 10px;
`;
