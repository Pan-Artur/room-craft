import styled from 'styled-components';

export const TransformerBed = () => {
  return (
    <BedContainer>
      <Base />
      <FoldPart />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Base = styled.div`
  width: 80%;
  height: 60%;
  background-color: #78909C;
  position: absolute;
  bottom: 10%;
  left: 10%;
`;

const FoldPart = styled.div`
  width: 80%;
  height: 25%;
  background-color: #546E7A;
  position: absolute;
  top: 10%;
  left: 10%;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 15%;
    background-color: #37474F;
    bottom: 0;
  }
`;