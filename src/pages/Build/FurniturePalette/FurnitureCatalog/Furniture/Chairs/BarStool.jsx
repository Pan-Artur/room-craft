import styled from 'styled-components';

export const BarStool = () => {
  return (
    <ChairContainer>
      <Seat />
      <Base />
      <Footrest />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 80px;
  height: 120px;
  position: relative;
`;

const Seat = styled.div`
  width: 50px;
  height: 10px;
  background-color: #795548;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 15px;
  z-index: 2;
`;

const Base = styled.div`
  width: 10px;
  height: 80px;
  background-color: #6D4C41;
  position: absolute;
  top: 20px;
  left: 35px;
  z-index: 1;
`;

const Footrest = styled.div`
  width: 40px;
  height: 5px;
  background-color: #5D4037;
  position: absolute;
  bottom: 30px;
  left: 20px;
  z-index: 1;
`;
