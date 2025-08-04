import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ClassicSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
  transform-origin: center;
  transition: transform 0.5s ease-in-out;
`;

const AnimatedSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SofaBase = styled.div`
  width: ${props => props.width || '90%'};
  height: ${props => props.height || '65%'};
  background: linear-gradient(145deg, #8b4513 0%, #6b3410 100%);
  border-radius: ${props => props.borderRadius || '8%'};
  position: absolute;
  top: ${props => props.top || '35%'};
  left: ${props => props.left || '5%'};
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.3),
    inset 0 -5px 10px rgba(0,0,0,0.2);
  z-index: 2;
  border: 2px solid #5a2d09;
`;

const SofaBack = styled.div`
  width: ${props => props.width || '90%'};
  height: ${props => props.height || '15%'};
  background: linear-gradient(145deg, #654321 0%, #543210 100%);
  border-radius: ${props => props.borderRadius || '8% 8% 0 0'};
  position: absolute;
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '5%'};
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  z-index: 3;
  border: 2px solid #4a2a08;
`;

const SofaArmrest = styled.div`
  width: ${props => props.width || '10%'};
  height: ${props => props.height || '50%'};
  background: linear-gradient(145deg, #654321 0%, #543210 100%);
  border-radius: ${props => props.borderRadius || '4%'};
  position: absolute;
  top: ${props => props.top || '25%'};
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
  box-shadow: ${props => props.$left ? 
    '2px 0 5px rgba(0,0,0,0.2)' : 
    '-2px 0 5px rgba(0,0,0,0.2)'};
  z-index: 4;
  border: 2px solid #4a2a08;
`;

const SofaCushion = styled.div`
  position: absolute;
  width: 40%;
  height: 30%;
  background: linear-gradient(145deg, #a0522d 0%, #8b4513 100%);
  border-radius: 10%;
  top: 40%;
  left: 30%;
  box-shadow: 
    inset 0 2px 4px rgba(255,255,255,0.1),
    inset 0 -2px 4px rgba(0,0,0,0.2);
  z-index: 3;
`;

export const ClassicSofaHorizontal = () => (
  <ClassicSofaContainer>
    <SofaBase />
    <SofaBack />
    <SofaArmrest $left />
    <SofaArmrest $right />
    <SofaCushion />
  </ClassicSofaContainer>
);

export const ClassicSofaVertical = () => (
  <ClassicSofaContainer>
    <SofaBase 
      width="65%"
      height="90%"
      top="5%"
      left="35%"
    />
    <SofaBack 
      width="15%"
      height="90%"
      top="5%"
      left="20%"
      borderRadius="8% 0 0 8%"
    />
    <SofaArmrest 
      $left
      width="50%"
      height="10%"
      top="0"
      left="35%"
      borderRadius="8% 8% 0 0"
    />
    <SofaArmrest 
      $right
      width="50%"
      height="10%"
      top="90%"
      left="35%"
      borderRadius="0 0 8% 8%"
    />
    <SofaCushion style={{
      width: '30%',
      height: '40%',
      top: '30%',
      left: '40%'
    }} />
  </ClassicSofaContainer>
);

export const ClassicSofaHorizontal180 = () => (
  <ClassicSofaContainer>
    <SofaBase />
    <SofaBack 
      top="auto"
      bottom="20%"
      borderRadius="0 0 8% 8%"
    />
    <SofaArmrest $left />
    <SofaArmrest $right />
    <SofaCushion />
  </ClassicSofaContainer>
);

export const ClassicSofaVertical270 = () => (
  <ClassicSofaContainer>
    <SofaBase 
      width="65%"
      height="90%"
      top="5%"
      left="0"
    />
    <SofaBack 
      width="15%"
      height="90%"
      top="5%"
      left="65%"
      borderRadius="0 8% 8% 0"
    />
    <SofaArmrest 
      $left
      width="50%"
      height="10%"
      top="0"
      left="0"
      borderRadius="8% 8% 0 0"
    />
    <SofaArmrest 
      $right
      width="50%"
      height="10%"
      top="90%"
      left="0"
      borderRadius="0 0 8% 8%"
    />
    <SofaCushion style={{
      width: '30%',
      height: '40%',
      top: '30%',
      left: '10%'
    }} />
  </ClassicSofaContainer>
);

export const ClassicSofa = ({ rotation = 0, isRotating = false }) => {
  const getSofaComponent = () => {
    switch(rotation) {
      case 0:
        return <ClassicSofaHorizontal />;
      case 90:
        return <ClassicSofaVertical />;
      case 180:
        return <ClassicSofaHorizontal180 />;
      case 270:
        return <ClassicSofaVertical270 />;
      default:
        return <ClassicSofaHorizontal />;
    }
  };

  return (
    <ClassicSofaContainer style={{ transform: `rotate(${rotation}deg)` }}>
      {isRotating ? (
        <AnimatedSofaContainer>
          {getSofaComponent()}
        </AnimatedSofaContainer>
      ) : (
        getSofaComponent()
      )}
    </ClassicSofaContainer>
  );
};

export const ClassicSofaItem = {
  name: "Classic Sofa",
  component: ClassicSofa,
  positions: [
    { rotation: 0, component: ClassicSofaHorizontal },
    { rotation: 90, component: ClassicSofaVertical },
    { rotation: 180, component: ClassicSofaHorizontal180 },
    { rotation: 270, component: ClassicSofaVertical270 }
  ]
};