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

const ChairShell = styled.div`
  width: 80%;
  height: 80%;
  background: linear-gradient(145deg, #5D4037 0%, #8D6E63 100%);
  border-radius: ${props => props.borderRadius || '50% 50% 50% 50% / 60% 60% 40% 40%'};
  position: absolute;
  top: ${props => props.top || '10%'};
  left: ${props => props.left || '10%'};
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.3),
    inset 0 -5px 15px rgba(0,0,0,0.2);
  z-index: 2;
`;

const ChairOpening = styled.div`
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '50%'};
  background: linear-gradient(145deg, #8D6E63 0%, #BCAAA4 100%);
  border-radius: ${props => props.borderRadius || '50%'};
  position: absolute;
  top: ${props => props.top || '25%'};
  left: ${props => props.left || '25%'};
  box-shadow: 
    inset 0 3px 5px rgba(255,255,255,0.2),
    inset 0 -3px 5px rgba(0,0,0,0.2);
  z-index: 3;
`;

const ChairBase = styled.div`
  position: absolute;
  width: 15%;
  height: 8%;
  background: #3E2723;
  border-radius: 3px;
  bottom: 5%;
  left: 42.5%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  z-index: 1;
`;

export const CocoonChairHorizontal = () => (
  <ChairContainer>
    <ChairShell />
    <ChairOpening />
    <ChairBase />
  </ChairContainer>
);

export const CocoonChairVertical = () => (
  <ChairContainer>
    <ChairShell 
      borderRadius="50% 50% 60% 40% / 50% 50% 50% 50%"
      top="10%"
      left="15%"
    />
    <ChairOpening 
      width="40%"
      height="50%"
      top="25%"
      left="30%"
    />
    <ChairBase style={{
      width: '8%',
      height: '15%',
      bottom: '42.5%',
      left: '5%'
    }} />
  </ChairContainer>
);

export const CocoonChairHorizontal180 = () => (
  <ChairContainer>
    <ChairShell 
      borderRadius="50% 50% 40% 60% / 40% 40% 60% 60%"
      top="10%"
      left="10%"
    />
    <ChairOpening 
      width="50%"
      height="50%"
      top="25%"
      left="25%"
      borderRadius="50% 50% 40% 60% / 40% 40% 60% 60%"
    />
    <ChairBase style={{
      bottom: 'auto',
      top: '5%',
      left: '42.5%'
    }} />
  </ChairContainer>
);

export const CocoonChairVertical270 = () => (
  <ChairContainer>
    <ChairShell 
      borderRadius="50% 50% 40% 60% / 50% 50% 50% 50%"
      top="10%"
      left="5%"
    />
    <ChairOpening 
      width="40%"
      height="50%"
      top="25%"
      left="20%"
    />
    <ChairBase style={{
      width: '8%',
      height: '15%',
      bottom: '42.5%',
      right: '5%',
      left: 'auto'
    }} />
  </ChairContainer>
);

export const CocoonChair = ({ rotation = 0, isRotating = false }) => {
  const getChairComponent = () => {
    switch(rotation) {
      case 0:
        return <CocoonChairHorizontal />;
      case 90:
        return <CocoonChairVertical />;
      case 180:
        return <CocoonChairHorizontal180 />;
      case 270:
        return <CocoonChairVertical270 />;
      default:
        return <CocoonChairHorizontal />;
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

export const CocoonChairItem = {
  name: "Cocoon Chair",
  component: CocoonChair,
  positions: [
    { rotation: 0, component: CocoonChairHorizontal },
    { rotation: 90, component: CocoonChairVertical },
    { rotation: 180, component: CocoonChairHorizontal180 },
    { rotation: 270, component: CocoonChairVertical270 }
  ]
};