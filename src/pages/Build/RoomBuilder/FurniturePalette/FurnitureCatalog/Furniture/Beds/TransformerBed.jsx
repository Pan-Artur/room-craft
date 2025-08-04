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

const BedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  animation: ${fadeIn} 0.5s ease-out;
`;

const AnimatedBedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${rotateAnimation} 0.5s ease-in-out forwards;
`;

const BedFrame = styled.div`
  background: #78909C;
  position: absolute;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  z-index: 3;
  border: 2px solid #546E7A;
`;

const Mattress = styled.div`
  background: #B0BEC5;
  position: relative;
  border-radius: 8px;
  box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1);
`;

const FoldIndicators = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

const FoldIndicator = styled.div`
  background: repeating-linear-gradient(
    to right,
    #37474F,
    #37474F 5px,
    transparent 5px,
    transparent 10px
  );
`;

const FoldPart = styled.div`
  background: #546E7A;
  position: absolute;
  border-radius: 8px;
  box-shadow: 0 -3px 5px rgba(0,0,0,0.1);
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    background: #37474F;
    border-radius: 0 0 8px 8px;
  }
`;

const Hinge = styled.div`
  position: absolute;
  background: #37474F;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  z-index: 4;
`;

const ControlPanel = styled.div`
  position: absolute;
  background: #37474F;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  &::before {
    content: '';
    color: #ECEFF1;
    font-size: 0.6rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const TransformerBedHorizontal = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '85%', 
      height: '65%', 
      bottom: '10%', 
      left: '7.5%',
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '100%', 
        height: '80%',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0'
      }} />
      
      <FoldIndicators style={{ 
        width: '80%', 
        height: '5%', 
        bottom: '15%', 
        left: '10%'
      }}>
        <FoldIndicator style={{ width: '45%', height: '100%' }} />
        <FoldIndicator style={{ width: '45%', height: '100%' }} />
      </FoldIndicators>
    </BedFrame>

    <FoldPart style={{ 
      width: '85%', 
      height: '20%', 
      top: '15%', 
      left: '7.5%',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }}>
      <Hinge style={{ 
        width: '8%', 
        height: '30%', 
        top: '50%', 
        left: '5%',
        transform: 'translateY(-50%)'
      }} />
      <Hinge style={{ 
        width: '8%', 
        height: '30%', 
        top: '50%', 
        right: '5%',
        transform: 'translateY(-50%)'
      }} />
    </FoldPart>

    <ControlPanel style={{ 
      width: '15%', 
      height: '5%', 
      top: '12%', 
      left: '50%',
      transform: 'translateX(-50%)'
    }} />
  </BedContainer>
);

export const TransformerBedVertical = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '65%', 
      height: '85%', 
      right: '10%', 
      top: '7.5%',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '80%', 
        height: '100%',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
      }} />
      
      <FoldIndicators style={{ 
        width: '5%', 
        height: '80%', 
        right: '15%', 
        top: '10%',
        flexDirection: 'column'
      }}>
        <FoldIndicator style={{ width: '100%', height: '45%' }} />
        <FoldIndicator style={{ width: '100%', height: '45%' }} />
      </FoldIndicators>
    </BedFrame>

    <FoldPart style={{ 
      width: '20%', 
      height: '85%', 
      left: '15%', 
      top: '7.5%',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0'
    }}>
      <Hinge style={{ 
        width: '30%', 
        height: '8%', 
        left: '50%', 
        top: '5%',
        transform: 'translateX(-50%)'
      }} />
      <Hinge style={{ 
        width: '30%', 
        height: '8%', 
        left: '50%', 
        bottom: '5%',
        transform: 'translateX(-50%)'
      }} />
    </FoldPart>

    <ControlPanel style={{ 
      width: '5%', 
      height: '15%', 
      right: '12%', 
      top: '50%',
      transform: 'translateY(-50%)'
    }} />
  </BedContainer>
);

export const TransformerBedHorizontal180 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '85%', 
      height: '65%', 
      top: '10%', 
      left: '7.5%',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '100%', 
        height: '80%',
        top: '20%',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0'
      }} />
      
      <FoldIndicators style={{ 
        width: '80%', 
        height: '5%', 
        top: '15%', 
        left: '10%'
      }}>
        <FoldIndicator style={{ width: '45%', height: '100%' }} />
        <FoldIndicator style={{ width: '45%', height: '100%' }} />
      </FoldIndicators>
    </BedFrame>

    <FoldPart style={{ 
      width: '85%', 
      height: '20%', 
      bottom: '15%', 
      left: '7.5%',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }}>
      <Hinge style={{ 
        width: '8%', 
        height: '30%', 
        top: '50%', 
        left: '5%',
        transform: 'translateY(-50%)'
      }} />
      <Hinge style={{ 
        width: '8%', 
        height: '30%', 
        top: '50%', 
        right: '5%',
        transform: 'translateY(-50%)'
      }} />
    </FoldPart>

    <ControlPanel style={{ 
      width: '15%', 
      height: '5%', 
      bottom: '12%', 
      left: '50%',
      transform: 'translateX(-50%)'
    }} />
  </BedContainer>
);

export const TransformerBedVertical270 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '65%', 
      height: '85%', 
      left: '10%', 
      top: '7.5%',
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '80%', 
        height: '100%',
        left: '20%',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
      }} />
      
      <FoldIndicators style={{ 
        width: '5%', 
        height: '80%', 
        left: '15%', 
        top: '10%',
        flexDirection: 'column'
      }}>
        <FoldIndicator style={{ width: '100%', height: '45%' }} />
        <FoldIndicator style={{ width: '100%', height: '45%' }} />
      </FoldIndicators>
    </BedFrame>

    <FoldPart style={{ 
      width: '20%', 
      height: '85%', 
      right: '15%', 
      top: '7.5%',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0'
    }}>
      <Hinge style={{ 
        width: '30%', 
        height: '8%', 
        right: '50%', 
        top: '5%',
        transform: 'translateX(50%)'
      }} />
      <Hinge style={{ 
        width: '30%', 
        height: '8%', 
        right: '50%', 
        bottom: '5%',
        transform: 'translateX(50%)'
      }} />
    </FoldPart>

    <ControlPanel style={{ 
      width: '5%', 
      height: '15%', 
      left: '12%', 
      top: '50%',
      transform: 'translateY(-50%)'
    }} />
  </BedContainer>
);

export const TransformerBed = ({ rotation = 0, isRotating = false }) => {
  const getBedComponent = () => {
    switch(rotation) {
      case 0:
        return <TransformerBedHorizontal />;
      case 90:
        return <TransformerBedVertical />;
      case 180:
        return <TransformerBedHorizontal180 />;
      case 270:
        return <TransformerBedVertical270 />;
      default:
        return <TransformerBedHorizontal />;
    }
  };

  return (
    <BedContainer>
      {isRotating ? (
        <AnimatedBedContainer 
          fromRotation={rotation - 90} 
          toRotation={rotation}
        >
          {getBedComponent()}
        </AnimatedBedContainer>
      ) : (
        getBedComponent()
      )}
    </BedContainer>
  );
};

export const TransformerBedItem = {
  name: "Transformer Bed",
  component: TransformerBed,
  positions: [
    { rotation: 0, component: TransformerBedHorizontal },
    { rotation: 90, component: TransformerBedVertical },
    { rotation: 180, component: TransformerBedHorizontal180 },
    { rotation: 270, component: TransformerBedVertical270 }
  ]
};