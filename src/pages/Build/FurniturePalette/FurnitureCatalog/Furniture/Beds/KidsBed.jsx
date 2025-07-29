import styled from 'styled-components';

export const KidsBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Mattress />
        <SideRail />
      </BedFrame>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
`;

const BedFrame = styled.div`
  width: 160px;
  height: 100px;
  background-color: #FF9800;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 150px;
  height: 80px;
  background-color: #FFF59D;
  border-radius: 8px;
  position: absolute;
  top: 10px;
  left: 5px;
`;

const SideRail = styled.div`
  width: 160px;
  height: 15px;
  background-color: #FFA000;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 0;
  left: 0;
`;
