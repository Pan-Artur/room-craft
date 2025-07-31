import styled from 'styled-components';

export const TransformerBed = () => {
  return (
    <BedContainer>
      <Base>
        <Mattress />
        <FoldIndicators>
          <FoldIndicator />
          <FoldIndicator />
        </FoldIndicators>
      </Base>
      <FoldPart>
        <Hinge $left />
        <Hinge $right />
      </FoldPart>
      <ControlPanel />
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

const Base = styled.div`
  width: 85%;
  height: 65%;
  background: #78909C;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0 0;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
`;

const Mattress = styled.div`
  width: 100%;
  height: 80%;
  background: #B0BEC5;
  position: absolute;
  top: 0;
  border-radius: 8px 8px 0 0;
`;

const FoldIndicators = styled.div`
  position: absolute;
  width: 80%;
  height: 5%;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

const FoldIndicator = styled.div`
  width: 45%;
  height: 100%;
  background: repeating-linear-gradient(
    to right,
    #37474F,
    #37474F 5px,
    transparent 5px,
    transparent 10px
  );
`;

const FoldPart = styled.div`
  width: 85%;
  height: 20%;
  background: #546E7A;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  box-shadow: 0 -3px 5px rgba(0,0,0,0.1);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    background: #37474F;
    bottom: 0;
    border-radius: 0 0 8px 8px;
  }
`;

const Hinge = styled.div`
  position: absolute;
  width: 8%;
  height: 30%;
  background: #37474F;
  top: 50%;
  ${props => props.$left ? 'left: 5%;' : 'right: 5%;'}
  transform: translateY(-50%);
  border-radius: 5px;
`;

const ControlPanel = styled.div`
  position: absolute;
  width: 15%;
  height: 5%;
  background: #37474F;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '▲▼';
    color: #ECEFF1;
    font-size: 12px;
  }
`;