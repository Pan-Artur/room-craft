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
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  animation: ${fadeIn} 0.5s ease-out;
`;

const AnimatedChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${rotateAnimation} 0.5s ease-in-out forwards;
`;

const ChairBase = styled.div`
  position: absolute;
  background: #8b4513;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 2;
`;

const Seat = styled.div`
  position: absolute;
  background: #8b4513;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 3;
`;

const Back = styled.div`
  position: absolute;
  background: #654321;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 1;
`;

const Leg = styled.div`
  position: absolute;
  background: #5D4037;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 2;
`;

export const ClassicWoodChairHorizontal = () => (
  <ChairContainer>
    <ChairBase style={{
      width: '60%',
      height: '40%',
      top: '40%',
      left: '20%'
    }}>
      <Seat style={{
        width: '100%',
        height: '100%'
      }} />
    </ChairBase>
    
    <Back style={{
      width: '50%',
      height: '60%',
      top: '0',
      left: '25%'
    }} />
    
    <Leg style={{
      width: '8%',
      height: '40%',
      bottom: '0',
      left: '20%'
    }} />
    <Leg style={{
      width: '8%',
      height: '40%',
      bottom: '0',
      right: '20%'
    }} />
    <Leg style={{
      width: '8%',
      height: '45%',
      bottom: '0',
      left: '15%'
    }} />
    <Leg style={{
      width: '8%',
      height: '45%',
      bottom: '0',
      right: '15%'
    }} />
  </ChairContainer>
);

export const ClassicWoodChairVertical = () => (
  <ChairContainer>
    <ChairBase style={{
      width: '40%',
      height: '60%',
      left: '30%',
      top: '20%'
    }}>
      <Seat style={{
        width: '100%',
        height: '100%'
      }} />
    </ChairBase>
    
    <Back style={{
      width: '60%',
      height: '50%',
      left: '0%',
      top: '25%'
    }} />
    
    <Leg style={{
      width: '40%',
      height: '8%',
      bottom: '20%',
      left: '0'
    }} />
    <Leg style={{
      width: '40%',
      height: '8%',
      top: '20%',
      left: '0'
    }} />
    <Leg style={{
      width: '45%',
      height: '8%',
      bottom: '15%',
      right: '0'
    }} />
    <Leg style={{
      width: '45%',
      height: '8%',
      top: '15%',
      right: '0'
    }} />
  </ChairContainer>
);

export const ClassicWoodChairHorizontal180 = () => (
  <ChairContainer>
    <ChairBase style={{
      width: '60%',
      height: '40%',
      bottom: '40%',
      left: '20%'
    }}>
      <Seat style={{
        width: '100%',
        height: '100%'
      }} />
    </ChairBase>
    
    <Back style={{
      width: '50%',
      height: '60%',
      bottom: '0',
      left: '25%'
    }} />
    
    <Leg style={{
      width: '8%',
      height: '40%',
      top: '0',
      left: '20%'
    }} />
    <Leg style={{
      width: '8%',
      height: '40%',
      top: '0',
      right: '20%'
    }} />
    <Leg style={{
      width: '8%',
      height: '45%',
      top: '0',
      left: '15%'
    }} />
    <Leg style={{
      width: '8%',
      height: '45%',
      top: '0',
      right: '15%'
    }} />
  </ChairContainer>
);

export const ClassicWoodChairVertical270 = () => (
  <ChairContainer>
    <ChairBase style={{
      width: '40%',
      height: '60%',
      right: '30%',
      top: '20%'
    }}>
      <Seat style={{
        width: '100%',
        height: '100%'
      }} />
    </ChairBase>
    
    <Back style={{
      width: '60%',
      height: '50%',
      right: '0%',
      top: '25%'
    }} />
    
    <Leg style={{
      width: '40%',
      height: '8%',
      bottom: '20%',
      right: '0'
    }} />
    <Leg style={{
      width: '40%',
      height: '8%',
      top: '20%',
      right: '0'
    }} />
    <Leg style={{
      width: '45%',
      height: '8%',
      bottom: '15%',
      left: '0'
    }} />
    <Leg style={{
      width: '45%',
      height: '8%',
      top: '15%',
      left: '0'
    }} />
  </ChairContainer>
);

export const ClassicWoodChair = ({ rotation = 0, isRotating = false }) => {
  const getChairComponent = () => {
    switch(rotation) {
      case 0:
        return <ClassicWoodChairHorizontal />;
      case 90:
        return <ClassicWoodChairVertical />;
      case 180:
        return <ClassicWoodChairHorizontal180 />;
      case 270:
        return <ClassicWoodChairVertical270 />;
      default:
        return <ClassicWoodChairHorizontal />;
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

export const ClassicWoodChairItem = {
  name: "Classic Wood Chair",
  component: ClassicWoodChair,
  positions: [
    { rotation: 0, component: ClassicWoodChairHorizontal },
    { rotation: 90, component: ClassicWoodChairVertical },
    { rotation: 180, component: ClassicWoodChairHorizontal180 },
    { rotation: 270, component: ClassicWoodChairVertical270 }
  ]
};