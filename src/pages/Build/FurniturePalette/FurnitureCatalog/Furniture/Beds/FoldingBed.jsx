import styled from 'styled-components';

export const FoldingBed = () => {
  return (
    <BedContainer>
      <MainPart />
      <FoldingPart />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 150px;
  height: 200px;
  position: relative;
`;

const MainPart = styled.div`
  width: 130px;
  height: 180px;
  background-color: #A1887F;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const FoldingPart = styled.div`
  width: 130px;
  height: 30px;
  background-color: #8D6E63;
  position: absolute;
  top: 10px;
  left: 10px;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #5D4037;
    bottom: 0;
  }
`;
