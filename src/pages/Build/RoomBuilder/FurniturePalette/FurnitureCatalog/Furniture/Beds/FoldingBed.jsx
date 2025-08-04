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
  background: #6B4F3B;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid #5A3E2A;
`;

const Mattress = styled.div`
  background: #FFF8E1;
  position: relative;
  border-radius: 8px;
  box-shadow: inset 0 -10px 20px rgba(0,0,0,0.15);
`;

const Pillow = styled.div`
  position: absolute;
  background: #FFF;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  border: 1px solid #EEE;
`;

const FoldingPart = styled.div`
  position: absolute;
  background: #5D4037;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  border: 1px solid #4D3025;
  z-index: 2;
`;

const Hinge = styled.div`
  position: absolute;
  background: #3E2723;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  z-index: 4;
`;

const FoldLine = styled.div`
  position: absolute;
  background: repeating-linear-gradient(
    to right,
    #3E2723,
    #3E2723 5px,
    transparent 5px,
    transparent 10px
  );
`;

const LegSupport = styled.div`
  position: absolute;
  background: #4D3025;
  border-radius: 3px;
  z-index: 5;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
`;

const SupportPattern = styled.div`
  position: absolute;
  background: linear-gradient(
    90deg, 
    transparent 15%, 
    #3E2723 15%, 
    #3E2723 20%, 
    transparent 20%, 
    transparent 80%, 
    #3E2723 80%, 
    #3E2723 85%, 
    transparent 85%
  );
`;

export const FoldingBedHorizontal = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '80%', 
      height: '65%', 
      bottom: '10%', 
      left: '10%',
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '96%', 
        height: '90%',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px'
      }}>
        <Pillow style={{ 
          top: '10%', 
          left: '5%', 
          width: '25%', 
          height: '20%',
          background: 'linear-gradient(to bottom, #FFF, #F5F5F5)'
        }} />
      </Mattress>
    </BedFrame>

    <FoldingPart style={{ 
      width: '80%', 
      height: '20%', 
      top: '10%', 
      left: '10%',
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Hinge style={{ 
        left: '10%', 
        top: '50%', 
        width: '8%', 
        height: '20%',
        transform: 'translateY(-50%)'
      }} />
      <Hinge style={{ 
        right: '10%', 
        top: '50%', 
        width: '8%', 
        height: '20%',
        transform: 'translateY(-50%)'
      }} />
      <FoldLine style={{ 
        top: '50%', 
        left: '20%', 
        width: '60%', 
        height: '2px',
        transform: 'translateY(-50%)'
      }} />
    </FoldingPart>

    <LegSupport style={{ 
      width: '70%', 
      height: '5%', 
      bottom: '5%', 
      left: '15%',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px'
    }}>
      <SupportPattern style={{ 
        width: '100%', 
        height: '150%', 
        bottom: '100%' 
      }} />
    </LegSupport>
  </BedContainer>
);

export const FoldingBedVertical = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '62%', 
      height: '80%', 
      left: '24%', 
      top: '10%',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px',
      boxShadow: '3px 0 10px rgba(0,0,0,0.2)'
    }}>
      <Mattress style={{ 
        width: '95%', 
        height: '96%',
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '12px',
        boxShadow: 'inset 2px 0 8px rgba(0,0,0,0.1)'
      }}>
        <Pillow style={{ 
          top: '5%', 
          left: '5%', 
          height: '20%', 
          width: '25%',
          background: 'linear-gradient(to right, #FFF, #F5F5F5)',
          boxShadow: '1px 1px 3px rgba(0,0,0,0.1)'
        }} />
      </Mattress>
    </BedFrame>

    <FoldingPart style={{ 
      width: '16%', 
      height: '80%', 
      left: '9%', 
      top: '10%',
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
      background: 'linear-gradient(to left, #6B4F3B 0%, #5D4037 100%)',
      boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
      zIndex: 2
    }}>
      <Hinge style={{ 
        top: '15%', 
        left: '60%', 
        width: '30%', 
        height: '6%',
        transform: 'translateX(-50%)',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.3)'
      }} />
      <Hinge style={{ 
        bottom: '15%', 
        left: '60%', 
        width: '30%', 
        height: '6%',
        transform: 'translateX(-50%)',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.3)'
      }} />
    </FoldingPart>

    <LegSupport style={{ 
      width: '4%', 
      height: '65%', 
      right: '10%', 
      top: '17.5%',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      background: 'linear-gradient(to left, #5D4037, #4D3025)',
      zIndex: 4
    }}>
    </LegSupport>
  </BedContainer>
);

export const FoldingBedHorizontal180 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '80%', 
      height: '65%', 
      top: '10%', 
      left: '10%',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '96%', 
        height: '90%',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px'
      }}>
        <Pillow style={{ 
          bottom: '10%', 
          right: '5%', 
          width: '25%', 
          height: '20%',
          background: 'linear-gradient(to top, #FFF, #F5F5F5)'
        }} />
      </Mattress>
    </BedFrame>

    <FoldingPart style={{ 
      width: '80%', 
      height: '20%', 
      bottom: '10%', 
      left: '10%',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px'
    }}>
      <Hinge style={{ 
        left: '10%', 
        top: '50%', 
        width: '8%', 
        height: '20%',
        transform: 'translateY(-50%)'
      }} />
      <Hinge style={{ 
        right: '10%', 
        top: '50%', 
        width: '8%', 
        height: '20%',
        transform: 'translateY(-50%)'
      }} />
      <FoldLine style={{ 
        top: '50%', 
        left: '20%', 
        width: '60%', 
        height: '2px',
        transform: 'translateY(-50%)'
      }} />
    </FoldingPart>

    <LegSupport style={{ 
      width: '70%', 
      height: '5%', 
      top: '5%', 
      left: '15%',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px'
    }}>
      <SupportPattern style={{ 
        width: '100%', 
        height: '150%', 
        top: '100%',
        transform: 'rotate(180deg)'
      }} />
    </LegSupport>
  </BedContainer>
);

export const FoldingBedVertical270 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '62%', 
      height: '80%', 
      right: '24%', 
      top: '10%',
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px',
      boxShadow: '-3px 0 10px rgba(0,0,0,0.2)'
    }}>
      <Mattress style={{ 
        width: '95%', 
        height: '96%',
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px',
        boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.1)'
      }}>
        <Pillow style={{ 
          top: '5%', 
          right: '5%', 
          height: '20%', 
          width: '25%',
          background: 'linear-gradient(to left, #FFF, #F5F5F5)',
          boxShadow: '-1px 1px 3px rgba(0,0,0,0.1)'
        }} />
      </Mattress>
    </BedFrame>

    <FoldingPart style={{ 
      width: '16%', 
      height: '80%', 
      right: '9%', 
      top: '10%',
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
      background: 'linear-gradient(to right, #6B4F3B 0%, #5D4037 100%)',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
      zIndex: 2
    }}>
      <Hinge style={{ 
        top: '15%', 
        right: '60%', 
        width: '30%', 
        height: '6%',
        transform: 'translateX(50%)',
        boxShadow: '-1px 1px 3px rgba(0,0,0,0.3)'
      }} />
      <Hinge style={{ 
        bottom: '15%', 
        right: '60%', 
        width: '30%', 
        height: '6%',
        transform: 'translateX(50%)',
        boxShadow: '-1px 1px 3px rgba(0,0,0,0.3)'
      }} />
    </FoldingPart>

    <LegSupport style={{ 
      width: '4%', 
      height: '65%', 
      left: '10%', 
      top: '17.5%',
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      background: 'linear-gradient(to right, #5D4037, #4D3025)',
      zIndex: 4
    }}>
    </LegSupport>
  </BedContainer>
);

export const FoldingBed = ({ rotation = 0, isRotating = false }) => {
  const getBedComponent = () => {
    switch(rotation) {
      case 0:
        return <FoldingBedHorizontal />;
      case 90:
        return <FoldingBedVertical />;
      case 180:
        return <FoldingBedHorizontal180 />;
      case 270:
        return <FoldingBedVertical270 />;
      default:
        return <FoldingBedHorizontal />;
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

export const FoldingBedItem = {
  name: "Space-Saving Folding Bed",
  component: FoldingBed,
  positions: [
    { rotation: 0, component: FoldingBedHorizontal },
    { rotation: 90, component: FoldingBedVertical },
    { rotation: 180, component: FoldingBedHorizontal180 },
    { rotation: 270, component: FoldingBedVertical270 }
  ]
};