import styled from 'styled-components';

export const SimpleChair = () => {
  return (
    <ChairContainer>
      <ChairSeat />
      <ChairBack />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ChairSeat = styled.div`
  width: 60px;
  height: 60px;
  background-color: #8b4513;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ChairBack = styled.div`
  width: 20px;
  height: 60px;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 40px;
`;