import styled from 'styled-components';

export const FloatingBed = () => {
  return (
    <BedContainer>
      <BedBase />
      <Mattress />
      <MagneticField />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
`;

const BedBase = styled.div`
  width: 160px;
  height: 10px;
  background-color: #212121;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 160px;
  height: 80px;
  background-color: #ECEFF1;
  position: absolute;
  bottom: 20px;
  left: 10px;
`;

const MagneticField = styled.div`
  width: 180px;
  height: 5px;
  background-color: #7C4DFF;
  opacity: 0.3;
  position: absolute;
  bottom: 15px;
  left: 0;
`;
