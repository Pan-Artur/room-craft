import styled from 'styled-components';

export const CanopyBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Mattress />
        <CanopyPillar left />
        <CanopyPillar right />
        <CanopyTop />
      </BedFrame>
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 200px;
  height: 180px;
  position: relative;
`;

const BedFrame = styled.div`
  width: 180px;
  height: 150px;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Mattress = styled.div`
  width: 180px;
  height: 100px;
  background-color: #F5F5F5;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const CanopyPillar = styled.div`
  width: 10px;
  height: 150px;
  background-color: #D7CCC8;
  position: absolute;
  bottom: 0;
  ${props => props.left ? 'left: 0;' : 'right: 0;'}
`;

const CanopyTop = styled.div`
  width: 200px;
  height: 10px;
  background-color: #D7CCC8;
  position: absolute;
  top: 0;
  left: -10px;
`;
