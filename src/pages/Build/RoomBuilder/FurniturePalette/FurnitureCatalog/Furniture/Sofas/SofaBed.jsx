import styled from 'styled-components';

export const SofaBed = () => {
  return (
    <SofaBedContainer>
      <BedBase />
      <BedBack />
      <BedPillow />
    </SofaBedContainer>
  );
};

const SofaBedContainer = styled.div`
  width: 240px;
  height: 120px;
  position: relative;
`;

const BedBase = styled.div`
  width: 220px;
  height: 90px;
  background-color: #6d4c41;
  border-radius: 5px;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const BedBack = styled.div`
  width: 220px;
  height: 15px;
  background-color: #5d4037;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const BedPillow = styled.div`
  width: 60px;
  height: 40px;
  background-color: #8d6e63;
  border-radius: 10px;
  position: absolute;
  top: 5px;
  left: 20px;
`;