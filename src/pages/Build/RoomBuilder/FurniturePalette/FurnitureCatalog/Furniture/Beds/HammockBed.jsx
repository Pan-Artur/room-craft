import styled from 'styled-components';

export const HammockBed = () => {
  return (
    <BedContainer>
      <Hammock />
      <Rope left />
      <Rope right />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
`;

const Hammock = styled.div`
  width: 140px;
  height: 80px;
  background-color: #8D6E63;
  border-radius: 50% 50% 0 0;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

const Rope = styled.div`
  width: 5px;
  height: 60px;
  background-color: #5D4037;
  position: absolute;
  top: 0;
  ${props => props.left ? 'left: 30px;' : 'right: 30px;'}
  transform-origin: top;
  transform: rotate(${props => props.left ? '15deg' : '-15deg'});
`;
