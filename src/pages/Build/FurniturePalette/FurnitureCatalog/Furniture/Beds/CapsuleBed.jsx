import styled from 'styled-components';

export const CapsuleBed = () => {
  return (
    <BedContainer>
      <Capsule />
      <Pillow />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 160px;
  height: 120px;
  position: relative;
`;

const Capsule = styled.div`
  width: 140px;
  height: 100px;
  background-color: #B3E5FC;
  border-radius: 50px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Pillow = styled.div`
  width: 50px;
  height: 30px;
  background-color: #E1F5FE;
  border-radius: 15px;
  position: absolute;
  top: 20px;
  left: 20px;
`;
