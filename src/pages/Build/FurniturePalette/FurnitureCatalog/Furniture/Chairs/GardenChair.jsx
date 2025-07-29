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
  width: 100px;
  height: 100px;
  position: relative;
`;

const Seat = styled.div`
  width: 70px;
  height: 70px;
  background-color: #00BCD4;
  border-radius: 10px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Back = styled.div`
  width: 70px;
  height: 20px;
  background-color: #0097A7;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 0;
  left: 15px;
`;

const Hole = styled.div`
  width: 40px;
  height: 40px;
  background-color: #B2EBF2;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
`;
