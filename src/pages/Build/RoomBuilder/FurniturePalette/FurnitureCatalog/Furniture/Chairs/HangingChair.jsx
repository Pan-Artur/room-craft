import styled from 'styled-components';

export const HangingChair = () => {
  return (
    <ChairContainer>
      <ChairSeat />
      <ChairRope />
      <ChairRope $right />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ChairSeat = styled.div`
  width: 70%;
  height: 40%;
  background-color: #5D4037;
  border-radius: 10%;
  position: absolute;
  bottom: 15%;
  left: 15%;
`;

const ChairRope = styled.div`
  width: 5%;
  height: 65%;
  background-color: #212121;
  position: absolute;
  top: 0;
  ${props => props.$right ? 'left: 75%;' : 'left: 20%;'}
  transform-origin: top;
  transform: rotate(${props => props.$right ? '-15deg' : '15deg'});
`;