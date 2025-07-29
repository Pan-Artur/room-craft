import styled from 'styled-components';

export const HammockBed = () => {
  return (
    <BedContainer>
      <Hammock />
      <Rope $left />
      <Rope $right />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Hammock = styled.div`
  width: 70%;
  height: 50%;
  background-color: #8D6E63;
  border-radius: 50% 50% 0 0;
  position: absolute;
  bottom: 10%;
`;

const Rope = styled.div`
  width: 3%;
  height: 40%;
  background-color: #5D4037;
  position: absolute;
  top: 5%;
  ${props => props.$left ? 'left: 20%;' : 'right: 20%;'}
  transform-origin: top;
  transform: rotate(${props => props.$left ? '15deg' : '-15deg'});
`;