import styled from 'styled-components';

export const ClassicWoodChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Back />
      <Leg $front $left />
      <Leg $front $right />
      <Leg $back $left />
      <Leg $back $right />
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
  height: 40%;
  background-color: #8b4513;
  position: absolute;
  top: 40%;
  left: 20%;
  z-index: 2;
`;

const Back = styled.div`
  width: 50%;
  height: 60%;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 25%;
  z-index: 1;
`;

const Leg = styled.div`
  width: 8%;
  height: 40%;
  background-color: #5D4037;
  position: absolute;
  bottom: 0;
  
  ${props => props.$front && props.$left && 'left: 20%;'}
  ${props => props.$front && props.$right && 'right: 20%;'}
  ${props => props.$back && props.$left && 'left: 15%; height: 45%;'}
  ${props => props.$back && props.$right && 'right: 15%; height: 45%;'}
`;