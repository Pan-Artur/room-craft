import styled from 'styled-components';

export const StorageBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Mattress />
        <Drawer />
        <Drawer $right />
      </BedFrame>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BedFrame = styled.div`
  width: 80%;
  height: 70%;
  background-color: #5D4037;
  position: absolute;
  top: 15%;
  left: 10%;
`;

const Mattress = styled.div`
  width: 100%;
  height: 65%;
  background-color: #D7CCC8;
  position: absolute;
  top: 0;
`;

const Drawer = styled.div`
  width: 45%;
  height: 15%;
  background-color: #3E2723;
  position: absolute;
  bottom: 0;
  ${props => props.$right ? 'right: 0;' : 'left: 0;'}
  
  &::before {
    content: '';
    position: absolute;
    width: 15%;
    height: 10%;
    background-color: #BCAAA4;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
  }
`;