import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(${props => props.fromRotation || 0}deg);
  }
  to {
    transform: rotate(${props => props.toRotation || 360}deg);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const rgbAnimation = keyframes`
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
  100% { filter: hue-rotate(0deg); }
`;

const GamingChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
`;

const AnimatedChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${rotateAnimation} 0.5s ease-in-out forwards;
`;

const GamingSeat = styled.div`
  width: ${props => props.width || '70%'};
  height: ${props => props.height || '50%'};
  background: linear-gradient(145deg, #1a1a1a 0%, #333 100%);
  border-radius: ${props => props.borderRadius || '10px 10px 0 0'};
  position: absolute;
  top: ${props => props.top || '30%'};
  left: ${props => props.left || '15%'};
  box-shadow: 
    0 4px 12px rgba(0,0,0,0.5),
    inset 0 -5px 15px rgba(255,255,255,0.05);
  z-index: 2;
  border: 2px solid #444;
`;

const GamingBack = styled.div`
  width: ${props => props.width || '70%'};
  height: ${props => props.height || '50%'};
  background: linear-gradient(145deg, #ff4500 0%, #ff6b45 100%);
  border-radius: ${props => props.borderRadius || '15px 15px 0 0'};
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '15%'};
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.3),
    inset 0 -3px 5px rgba(255,255,255,0.1);
  z-index: 3;
  animation: ${rgbAnimation} 5s ease-in-out infinite;
  border: 2px solid #ff5500;
`;

const GamingWings = styled.div`
  width: ${props => props.width || '15%'};
  height: ${props => props.height || '70%'};
  background: linear-gradient(145deg, #1a1a1a 0%, #333 100%);
  position: absolute;
  top: ${props => props.top || '15%'};
  left: ${props => props.left || '0'};
  border-radius: ${props => props.leftRadius || '15px 0 0 15px'};
  box-shadow: 0 2px 5px rgba(0,0,0,0.4);
  z-index: 1;
  border: 2px solid #444;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: ${props => props.rightRadius || '0 15px 15px 0'};
    right: ${props => props.rightOffset || '-85%'};
    box-shadow: inherit;
    border: inherit;
  }
`;

const GamingBase = styled.div`
  position: absolute;
  width: ${props => props.width || '30%'};
  height: ${props => props.height || '10%'};
  background: linear-gradient(145deg, #333 0%, #1a1a1a 100%);
  border-radius: 5px;
  bottom: ${props => props.bottom || '5%'};
  left: ${props => props.left || '35%'};
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  z-index: 1;
  border: 1px solid #444;
`;

const GamingPillow = styled.div`
  position: absolute;
  width: 60%;
  height: 20%;
  background: #333;
  border-radius: 10px;
  top: 70%;
  left: 20%;
  z-index: 4;
  border: 1px solid #444;
`;

const GamingWheels = styled.div`
  position: absolute;
  width: 8%;
  height: 8%;
  background: radial-gradient(circle, #444 0%, #000 70%);
  border-radius: 50%;
  bottom: 2%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  z-index: 0;
  border: 1px solid #666;

  &:nth-child(1) { left: 15%; }
  &:nth-child(2) { left: 35%; }
  &:nth-child(3) { left: 65%; }
  &:nth-child(4) { left: 85%; }
`;

export const GamingChairHorizontal = () => (
  <GamingChairContainer>
    <GamingSeat />
    <GamingBack />
    <GamingWings />
    <GamingPillow />
    <GamingBase />
    <GamingWheels /><GamingWheels /><GamingWheels /><GamingWheels />
  </GamingChairContainer>
);

export const GamingChairVertical = () => (
  <GamingChairContainer>
    <GamingSeat 
      width="50%"
      height="70%"
      top="15%"
      left="25%"
      borderRadius="10px 0 0 10px"
    />
    <GamingBack 
      width="20%"
      height="70%"
      top="15%"
      left="5%"
      borderRadius="15px 0 0 15px"
    />
    <GamingWings 
      width="8%"
      height="50%"
      top="25%"
      left="25%"
      leftRadius="5px 5px 0 0"
      rightRadius="5px 5px 0 0"
      rightOffset="-300%"
    />
    <GamingPillow style={{ width: '20%', height: '60%', top: '15%', left: '75%' }} />
    <GamingBase 
      width="10%"
      height="30%"
      bottom="35%"
      left="5%"
    />
    <GamingWheels style={{ left: '5%', bottom: '15%' }} />
    <GamingWheels style={{ left: '5%', bottom: '35%' }} />
    <GamingWheels style={{ left: '5%', bottom: '65%' }} />
    <GamingWheels style={{ left: '5%', bottom: '85%' }} />
  </GamingChairContainer>
);

export const GamingChairHorizontal180 = () => (
  <GamingChairContainer>
    <GamingSeat />
    <GamingBack 
      top="auto"
      bottom="0"
      borderRadius="0 0 15px 15px"
    />
    <GamingWings 
      top="15%"
      left="85%"
    />
    <GamingPillow style={{ top: '10%' }} />
    <GamingBase 
      bottom="auto"
      top="5%"
    />
    <GamingWheels style={{ bottom: 'auto', top: '2%', left: '15%' }} />
    <GamingWheels style={{ bottom: 'auto', top: '2%', left: '35%' }} />
    <GamingWheels style={{ bottom: 'auto', top: '2%', left: '65%' }} />
    <GamingWheels style={{ bottom: 'auto', top: '2%', left: '85%' }} />
  </GamingChairContainer>
);

export const GamingChairVertical270 = () => (
  <GamingChairContainer>
    <GamingSeat 
      width="50%"
      height="70%"
      top="15%"
      left="25%"
      borderRadius="0 10px 10px 0"
    />
    <GamingBack 
      width="20%"
      height="70%"
      top="15%"
      left="75%"
      borderRadius="0 15px 15px 0"
    />
    <GamingWings 
      width="8%"
      height="50%"
      top="25%"
      left="67%"
      leftRadius="5px 5px 0 0"
      rightRadius="5px 5px 0 0"
      rightOffset="300%"
    />
    <GamingPillow style={{ width: '20%', height: '60%', top: '15%', left: '5%' }} />
    <GamingBase 
      width="10%"
      height="30%"
      bottom="35%"
      left="85%"
    />
    <GamingWheels style={{ left: '85%', bottom: '15%' }} />
    <GamingWheels style={{ left: '85%', bottom: '35%' }} />
    <GamingWheels style={{ left: '85%', bottom: '65%' }} />
    <GamingWheels style={{ left: '85%', bottom: '85%' }} />
  </GamingChairContainer>
);

export const GamingChair = ({ rotation = 0, isRotating = false }) => {
  const getChairComponent = () => {
    switch(rotation) {
      case 0:
        return <GamingChairHorizontal />;
      case 90:
        return <GamingChairVertical />;
      case 180:
        return <GamingChairHorizontal180 />;
      case 270:
        return <GamingChairVertical270 />;
      default:
        return <GamingChairHorizontal />;
    }
  };

  return (
    <GamingChairContainer>
      {isRotating ? (
        <AnimatedChairContainer 
          fromRotation={rotation - 90} 
          toRotation={rotation}
        >
          {getChairComponent()}
        </AnimatedChairContainer>
      ) : (
        getChairComponent()
      )}
    </GamingChairContainer>
  );
};

export const GamingChairItem = {
  name: "Premium Gaming Chair",
  component: GamingChair,
  positions: [
    { rotation: 0, component: GamingChairHorizontal },
    { rotation: 90, component: GamingChairVertical },
    { rotation: 180, component: GamingChairHorizontal180 },
    { rotation: 270, component: GamingChairVertical270 }
  ]
};