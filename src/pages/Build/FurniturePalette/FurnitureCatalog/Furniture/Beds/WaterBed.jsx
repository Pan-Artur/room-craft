import styled from 'styled-components';

export const WaterBed = () => {
  return (
    <BedContainer>
      <BedFrame>
        <Water />
        <Wave />
        <Wave delay />
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
  background-color: #009688;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  overflow: hidden;
`;

const Water = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4DB6AC;
  opacity: 0.7;
`;

const Wave = styled.div`
  width: 100%;
  height: 10px;
  background-color: #80CBC4;
  position: absolute;
  top: ${() => Math.floor(Math.random() * 70) + 20}px;
  animation: wave 3s linear infinite;
  animation-delay: ${props => props.delay ? '1.5s' : '0s'};
  
  @keyframes wave {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
