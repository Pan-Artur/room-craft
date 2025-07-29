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
  width: 200px;
  height: 150px;
  position: relative;
`;

const Base = styled.div`
  width: 180px;
  height: 100px;
  background-color: #78909C;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const FoldPart = styled.div`
  width: 180px;
  height: 40px;
  background-color: #546E7A;
  position: absolute;
  top: 10px;
  left: 10px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #37474F;
    bottom: 0;
  }
`;
