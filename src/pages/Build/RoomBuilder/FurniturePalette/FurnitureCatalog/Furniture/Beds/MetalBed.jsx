import styled from 'styled-components';

export const MetalBed = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <BedContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <BedFrame>
        <Mattress>
          <Pillow />
          <Blanket />
        </Mattress>
        <Headboard />
        <Footboard />
      </BedFrame>
      <Legs>
        {[...Array(4)].map((_, i) => <Leg key={i} />)}
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
  align-items: center;
  transition: transform 0.3s ease;
`;

const BedFrame = styled.div`
  width: 85%;
  height: 75%;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  border: 3px solid #cfcfcf;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Mattress = styled.div`
  width: 92%;
  height: 85%;
  background: #fff8e1;
  position: absolute;
  top: 7%;
  left: 4%;
  border-radius: 3px;
  overflow: hidden;
`;

const Pillow = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 25%;
  height: 15%;
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 -2px 5px rgba(0,0,0,0.1);
`;

const Blanket = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 90%;
  height: 40%;
  background: #bbdefb;
  border-radius: 5px;
`;

const Headboard = styled.div`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 12%;
  background: linear-gradient(to right, #616161, #9e9e9e, #616161);
  border-radius: 5px 5px 0 0;
`;

const Footboard = styled.div`
  position: absolute;
  bottom: -5%;
  left: 0;
  width: 100%;
  height: 7%;
  background: linear-gradient(to right, #616161, #9e9e9e, #616161);
  border-radius: 0 0 5px 5px;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Leg = styled.div`
  width: 4%;
  height: 7%;
  background: linear-gradient(to bottom, #424242, #616161);
  position: absolute;
  bottom: 0;
  
  &:nth-child(1) { left: 8%; border-radius: 0 0 3px 3px; }
  &:nth-child(2) { right: 8%; border-radius: 0 0 3px 3px; }
  &:nth-child(3) { left: 8%; top: 68%; }
  &:nth-child(4) { right: 8%; top: 68%; }
`;