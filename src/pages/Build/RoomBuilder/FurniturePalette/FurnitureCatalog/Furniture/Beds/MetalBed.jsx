import styled from 'styled-components';

export const MetalBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Mattress />
      </BedFrame>
      <Legs>
        {[...Array(4)].map((_, i) => <Leg key={i} />)}
      </Legs>
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
  background-color: #E0E0E0;
  border: 2px solid #BDBDBD;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 170px;
  height: 100px;
  background-color: #FFF8E1;
  position: absolute;
  top: 10px;
  left: 5px;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Leg = styled.div`
  width: 8px;
  height: 8px;
  background-color: #616161;
  position: absolute;
  bottom: 5px;
  
  &:nth-child(1) { left: 15px; }
  &:nth-child(2) { right: 15px; }
  &:nth-child(3) { left: 15px; top: 130px; }
  &:nth-child(4) { right: 15px; top: 130px; }
`;
