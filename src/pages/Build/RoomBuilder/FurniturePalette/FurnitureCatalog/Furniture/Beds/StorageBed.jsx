import styled from 'styled-components';

export const StorageBed = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <BedContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <BedFrame>
        <Mattress>
          <Pillow />
          <Blanket />
        </Mattress>
        <Drawer $left>
          <DrawerHandle />
        </Drawer>
        <Drawer $right>
          <DrawerHandle />
        </Drawer>
        <CenterPanel />
      </BedFrame>
      <Legs>
        <Leg />
        <Leg />
      </Legs>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${({ $vertical }) => ($vertical ? '2 / 3' : '3 / 2')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: transform 0.3s ease;
`;

const BedFrame = styled.div`
  width: 85%;
  height: 75%;
  background: #5D4037;
  position: relative;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

const Mattress = styled.div`
  width: 100%;
  height: 65%;
  background: #D7CCC8;
  position: absolute;
  top: 0;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

const Pillow = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 25%;
  height: 20%;
  background: #EFEBE9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Blanket = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 50%;
  height: 30%;
  background: #BCAAA4;
  border-radius: 5px;
`;

const Drawer = styled.div`
  width: 40%;
  height: 20%;
  background: #3E2723;
  position: absolute;
  bottom: 0;
  ${props => props.$left ? 'left: 5%;' : 'right: 5%;'}
  border-radius: 0 0 5px 5px;
  box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2);
`;

const DrawerHandle = styled.div`
  position: absolute;
  width: 20%;
  height: 10%;
  background: #BCAAA4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

const CenterPanel = styled.div`
  position: absolute;
  width: 10%;
  height: 20%;
  background: #4E342E;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Legs = styled.div`
  position: absolute;
  width: 85%;
  height: 5%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

const Leg = styled.div`
  width: 8%;
  height: 100%;
  background: #3E2723;
  border-radius: 0 0 3px 3px;
`;