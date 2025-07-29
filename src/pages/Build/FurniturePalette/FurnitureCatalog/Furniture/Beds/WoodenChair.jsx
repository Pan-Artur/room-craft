import styled from 'styled-components';

export const WoodenBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Mattress />
        <Headboard />
      </BedFrame>
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
  height: 130px;
  background-color: #8B4513;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 160px;
  height: 100px;
  background-color: #F5F5DC;
  border-radius: 3px;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const Headboard = styled.div`
  width: 180px;
  height: 20px;
  background-color: #A0522D;
  position: absolute;
  top: 0;
  left: 0;
`;
