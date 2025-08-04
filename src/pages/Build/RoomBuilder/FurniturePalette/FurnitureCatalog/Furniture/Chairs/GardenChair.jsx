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

const ChairContainer = styled.div`
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

const Seat = styled.div`
  width: ${props => props.width || '70%'};
  height: ${props => props.height || '70%'};
  background: ${props => props.color || '#00BCD4'};
  border-radius: ${props => props.borderRadius || '10%'};
  position: absolute;
  top: ${props => props.top || '15%'};
  left: ${props => props.left || '15%'};
  box-shadow: 
    0 2px 5px rgba(0,0,0,0.2),
    inset 0 -3px 10px rgba(0,0,0,0.1);
  z-index: 2;
  border: 2px solid #00838f;
`;

const Back = styled.div`
  width: ${props => props.width || '70%'};
  height: ${props => props.height || '20%'};
  background: ${props => props.color || '#0097A7'};
  border-radius: ${props => props.borderRadius || '10% 10% 0 0'};
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '15%'};
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 3;
  border: 2px solid #006064;
`;

const Hole = styled.div`
  width: ${props => props.width || '40%'};
  height: ${props => props.height || '40%'};
  background: ${props => props.color || '#B2EBF2'};
  border-radius: ${props => props.borderRadius || '50%'};
  position: absolute;
  top: ${props => props.top || '30%'};
  left: ${props => props.left || '30%'};
  z-index: 1;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
  border: 2px dashed #80deea;
`;

const Leg = styled.div`
  position: absolute;
  width: ${props => props.width || '8%'};
  height: ${props => props.height || '15%'};
  background: #5D4037;
  border-radius: 3px;
  bottom: ${props => props.bottom || '5%'};
  left: ${props => props.left || '20%'};
  z-index: 1;
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);
`;

export const GardenChairHorizontal = () => (
  <ChairContainer>
    <Seat />
    <Back />
    <Hole />
    <Leg />
    <Leg style={{ left: '72%' }} />
  </ChairContainer>
);

export const GardenChairVertical = () => (
  <ChairContainer>
    <Seat 
      width="60%"
      height="70%"
      top="15%"
      left="20%"
    />
    <Back 
      width="20%"
      height="70%"
      top="15%"
      left="0"
      borderRadius="10% 0 0 10%"
    />
    <Hole 
      width="30%"
      height="40%"
      top="30%"
      left="35%"
    />
    <Leg 
      width="15%"
      height="8%"
      bottom="20%"
      left="0"
    />
    <Leg 
      width="15%"
      height="8%"
      top="20%"
      left="0"
    />
  </ChairContainer>
);

export const GardenChairHorizontal180 = () => (
  <ChairContainer>
    <Seat />
    <Back 
      top="auto"
      bottom="0"
      borderRadius="0 0 10% 10%"
    />
    <Hole />
    <Leg 
      bottom="auto"
      top="5%"
      left="20%"
    />
    <Leg 
      bottom="auto"
      top="5%"
      left="72%"
    />
  </ChairContainer>
);

export const GardenChairVertical270 = () => (
  <ChairContainer>
    <Seat 
      width="60%"
      height="70%"
      top="15%"
      left="20%"
    />
    <Back 
      width="20%"
      height="70%"
      top="15%"
      left="80%"
      borderRadius="0 10% 10% 0"
    />
    <Hole 
      width="30%"
      height="40%"
      top="30%"
      left="35%"
    />
    <Leg 
      width="15%"
      height="8%"
      bottom="20%"
      left="85%"
    />
    <Leg 
      width="15%"
      height="8%"
      top="20%"
      left="85%"
    />
  </ChairContainer>
);

export const GardenChair = ({ rotation = 0, isRotating = false }) => {
  const getChairComponent = () => {
    switch(rotation) {
      case 0:
        return <GardenChairHorizontal />;
      case 90:
        return <GardenChairVertical />;
      case 180:
        return <GardenChairHorizontal180 />;
      case 270:
        return <GardenChairVertical270 />;
      default:
        return <GardenChairHorizontal />;
    }
  };

  return (
    <ChairContainer>
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
    </ChairContainer>
  );
};

export const GardenChairItem = {
  name: "Garden Chair",
  component: GardenChair,
  positions: [
    { rotation: 0, component: GardenChairHorizontal },
    { rotation: 90, component: GardenChairVertical },
    { rotation: 180, component: GardenChairHorizontal180 },
    { rotation: 270, component: GardenChairVertical270 }
  ]
};