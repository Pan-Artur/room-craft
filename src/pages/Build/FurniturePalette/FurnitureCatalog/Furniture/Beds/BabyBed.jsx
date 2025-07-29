import styled from 'styled-components';

export const BabyBed = () => {
  return (
    <BedContainer>
      <Crib>
        <Mattress />
        <Bars>
          {[...Array(8)].map((_, i) => <Bar key={i} />)}
        </Bars>
      </Crib>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 150px;
  height: 100px;
  position: relative;
`;

const Crib = styled.div`
  width: 130px;
  height: 80px;
  background-color: #E1F5FE;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 120px;
  height: 60px;
  background-color: #E8F5E9;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 5px;
`;

const Bars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Bar = styled.div`
  width: 5px;
  height: 40px;
  background-color: #4FC3F7;
  position: absolute;
  top: 0;
  left: ${props => props.index * 18}px;
  
  &:nth-child(1) { left: 10px; }
  &:nth-child(2) { left: 25px; }
  &:nth-child(3) { left: 40px; }
  &:nth-child(4) { left: 55px; }
  &:nth-child(5) { left: 70px; }
  &:nth-child(6) { left: 85px; }
  &:nth-child(7) { left: 100px; }
  &:nth-child(8) { left: 115px; }
`;
