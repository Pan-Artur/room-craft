import styled from 'styled-components';

export const StorageBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Mattress />
        <Drawer />
        <Drawer right />
      </BedFrame>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
`;

const BedFrame = styled.div`
  width: 180px;
  height: 120px;
  background-color: #5D4037;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 180px;
  height: 80px;
  background-color: #D7CCC8;
  position: absolute;
  top: 0;
  left: 0;
`;

const Drawer = styled.div`
  width: 80px;
  height: 20px;
  background-color: #3E2723;
  position: absolute;
  bottom: 0;
  ${props => props.right ? 'right: 0;' : 'left: 0;'}
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: #BCAAA4;
    top: 9px;
    left: 10px;
  }
`;
