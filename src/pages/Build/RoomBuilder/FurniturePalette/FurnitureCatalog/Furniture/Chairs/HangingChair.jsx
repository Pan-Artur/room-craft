import styled from 'styled-components';

export const HangingChair = () => {
  return (
    <ChairContainer>
      <ChairSeat />
      <ChairRope />
      <ChairRope right />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 120px;
  position: relative;
`;

const ChairSeat = styled.div`
  width: 70px;
  height: 50px;
  background-color: #5D4037;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 15px;
`;

const ChairRope = styled.div`
  width: 5px;
  height: 80px;
  background-color: #212121;
  position: absolute;
  top: 0;
  left: ${props => props.right ? '75px' : '20px'};
  transform-origin: top;
  transform: rotate(${props => props.right ? '-15deg' : '15deg'});
`;
