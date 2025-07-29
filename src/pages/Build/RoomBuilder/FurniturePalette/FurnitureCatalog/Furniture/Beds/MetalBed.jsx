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
  width: 100%;
  height: 100%;
  position: relative;
`;

const BedFrame = styled.div`
  width: 80%;
  height: 70%;
  background-color: #E0E0E0;
  border: 2px solid #BDBDBD;
  position: absolute;
  top: 15%;
  left: 10%;
`;

const Mattress = styled.div`
  width: 90%;
  height: 80%;
  background-color: #FFF8E1;
  position: absolute;
  top: 10%;
  left: 5%;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Leg = styled.div`
  width: 5%;
  height: 5%;
  background-color: #616161;
  position: absolute;
  bottom: 5%;
  
  &:nth-child(1) { left: 10%; }
  &:nth-child(2) { right: 10%; }
  &:nth-child(3) { left: 10%; top: 80%; }
  &:nth-child(4) { right: 10%; top: 80%; }
`;