import styled from 'styled-components';

export const FoldingBed = () => {
  return (
    <BedContainer>
      <MainPart>
        <Mattress />
        <Pillow />
      </MainPart>
      <FoldingPart>
        <Hinge $left />
        <Hinge $right />
        <FoldLine />
      </FoldingPart>
      <LegSupport />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const MainPart = styled.div`
  width: 80%;
  height: 65%;
  background: #A1887F;
  position: absolute;
  bottom: 5%;
  left: 10%;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 2;
`;

const Mattress = styled.div`
  width: 100%;
  height: 90%;
  background: #D7CCC8;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 5px 5px;
`;

const Pillow = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 25%;
  height: 20%;
  background: #EFEBE9;
  border-radius: 5px;
`;

const FoldingPart = styled.div`
  width: 80%;
  height: 20%;
  background: #8D6E63;
  position: absolute;
  top: 10%;
  left: 10%;
  border-radius: 8px;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  z-index: 1;
`;

const Hinge = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.$left ? 'left: 10%;' : 'right: 10%;'}
  width: 8%;
  height: 20%;
  background: #5D4037;
  border-radius: 50%;
  transform: translateY(-50%);
`;

const FoldLine = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  width: 60%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #5D4037,
    #5D4037 5px,
    transparent 5px,
    transparent 10px
  );
  transform: translateY(-50%);
`;

const LegSupport = styled.div`
  position: absolute;
  width: 70%;
  height: 5%;
  background: #5D4037;
  bottom: 0;
  left: 15%;
  border-radius: 3px 3px 0 0;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150%;
    background: linear-gradient(90deg, 
      transparent 15%, 
      #5D4037 15%, 
      #5D4037 20%, 
      transparent 20%, 
      transparent 80%, 
      #5D4037 80%, 
      #5D4037 85%, 
      transparent 85%
    );
    bottom: 100%;
  }
`;