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
  width: 100%;
  height: 100%;
  position: relative;
`;

const ChairSeat = styled.div`
  width: 60%;
  height: 60%;
  background-color: #8b4513;
  border-radius: 5%;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const ChairBack = styled.div`
  width: 20%;
  height: 60%;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 40%;
`;