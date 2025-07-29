import styled from 'styled-components';

export const LedBed = () => {
  return (
    <BedContainer>
      <BedBase>
        <Mattress />
        <LedStrip />
      </BedBase>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
`;

const BedBase = styled.div`
  width: 180px;
  height: 120px;
  background-color: #212121;
  border-radius: 5px;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 170px;
  height: 100px;
  background-color: #263238;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 5px;
`;

const LedStrip = styled.div`
  width: 180px;
  height: 5px;
  background-color: #00E5FF;
  box-shadow: 0 0 10px #00E5FF;
  position: absolute;
  bottom: 0;
  left: 0;
`;
