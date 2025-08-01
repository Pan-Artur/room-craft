import styled from 'styled-components';

export const CanopyBed = ({ rotation = 0 }) => {
  const isVertical = rotation % 180 !== 0;

  return (
    <BedContainer $vertical={isVertical} style={{ transform: `rotate(${rotation}deg)` }}>
      <Pillar $left />
      <Pillar $right />
      <CanopyTop />
      <CanopyBackdrop />
      <BedFrame>
        <Mattress>
          <Pillow />
          <BedCover />
        </Mattress>
      </BedFrame>
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
  transform: ${({ $rotation }) => `rotate(${$rotation}deg)`};
  transform-origin: center;
  transition: transform 0.3s ease;
`;

const Pillar = styled.div`
  width: 6%;
  height: 80%;
  background: linear-gradient(to bottom, #A1887F, #D7CCC8);
  position: absolute;
  bottom: 0;
  ${props => props.$left ? 'left: 10%;' : 'right: 10%;'}
  z-index: 2;
  border-radius: 3px;
`;

const CanopyTop = styled.div`
  width: 90%;
  height: 10%;
  background: linear-gradient(to bottom, #BCAAA4, #D7CCC8);
  position: absolute;
  top: 5%;
  left: 5%;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 3;
`;

const CanopyBackdrop = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 90%;
  height: 60%;
  background: linear-gradient(
    to bottom,
    rgba(188,170,164,0.7),
    rgba(215,204,200,0.4)
  );
  backdrop-filter: blur(1px);
  z-index: 1;
`;

const BedFrame = styled.div`
  width: 80%;
  height: 60%;
  position: relative;
  z-index: 2;
`;

const Mattress = styled.div`
  width: 100%;
  height: 80%;
  background: #FFF8E1;
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  box-shadow: inset 0 -5px 10px rgba(0,0,0,0.05);
`;

const Pillow = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 25%;
  height: 20%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const BedCover = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 90%;
  height: 40%;
  background: #BCAAA4;
  border-radius: 5px;
`;