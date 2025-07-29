import styled from 'styled-components';

export const CanopyBed = () => {
  return (
    <BedContainer>
      <Mattress />
      <CanopyPillar $left />
      <CanopyPillar $right />
      <CanopyTop />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Mattress = styled.div`
  width: 80%;
  height: 60%;
  background-color: #F5F5F5;
  border-radius: 5% 5% 0 0;
  position: relative;
  z-index: 1;
`;

const CanopyPillar = styled.div`
  width: 8%;
  height: 80%;
  background-color: #D7CCC8;
  position: absolute;
  bottom: 0;
  ${props => props.$left ? 'left: 10%;' : 'right: 10%;'}
  z-index: 2;
`;

const CanopyTop = styled.div`
  width: 100%;
  height: 8%;
  background-color: #D7CCC8;
  position: absolute;
  top: 0;
  z-index: 3;
`;