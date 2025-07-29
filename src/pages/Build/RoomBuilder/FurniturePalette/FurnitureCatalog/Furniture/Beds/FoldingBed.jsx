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
  width: 100%;
  height: 100%;
  position: relative;
`;

const MainPart = styled.div`
  width: 80%;
  height: 70%;
  background-color: #A1887F;
  position: absolute;
  bottom: 5%;
  left: 10%;
  border-radius: 5% 5% 0 0;
`;

const FoldingPart = styled.div`
  width: 80%;
  height: 20%;
  background-color: #8D6E63;
  position: absolute;
  top: 5%;
  left: 10%;
  border-radius: 5%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 15%;
    background-color: #5D4037;
    bottom: 0;
    border-radius: 0 0 5% 5%;
  }
`