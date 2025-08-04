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

const Pillar = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, #C9B8A8, #A68A72);
  box-shadow: 2px 0 10px rgba(0,0,0,0.3);
  z-index: 3;
  border-radius: 8px;
`;

const CanopyTop = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, #D4C4B5, #B8A089);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  z-index: 4;
  border-radius: 8px;
`;

const CanopyBackdrop = styled.div`
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(201, 184, 168, 0.7),
    rgba(166, 138, 114, 0.4)
  );
  backdrop-filter: blur(3px);
  z-index: 2;
  border-radius: 8px;
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

const BedCover = styled.div`
  position: absolute;
  background: #8D6E63;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  border: 1px solid #7D5E53;
`;

const FabricFolds = styled.div`
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.1) 0%,
    rgba(0,0,0,0.1) 50%,
    rgba(255,255,255,0.1) 100%
  );
  border-radius: 4px;
`;

const Carving = styled.div`
  position: absolute;
  width: 60%;
  height: 10%;
  background: #5A3E2A;
  border-radius: 20px;
`;

export const CanopyBedHorizontal = () => (
  <BedContainer>
    <Pillar style={{ 
      left: '5%', 
      bottom: '5%', 
      width: '6%', 
      height: '75%',
      boxShadow: '3px 0 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ top: '20%', left: '20%' }} />
      <Carving style={{ top: '40%', left: '20%' }} />
      <Carving style={{ top: '60%', left: '20%' }} />
    </Pillar>
    <Pillar style={{ 
      right: '5%', 
      bottom: '5%', 
      width: '6%', 
      height: '75%',
      boxShadow: '-3px 0 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ top: '20%', left: '20%' }} />
      <Carving style={{ top: '40%', left: '20%' }} />
      <Carving style={{ top: '60%', left: '20%' }} />
    </Pillar>

    <CanopyTop style={{ 
      top: '5%', 
      left: '5%', 
      width: '90%', 
      height: '8%',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px'
    }} />
    
    <CanopyBackdrop style={{ 
      top: '13%', 
      left: '5%', 
      width: '90%', 
      height: '55%',
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px'
    }} />

    <BedFrame style={{ 
      width: '84%', 
      height: '55%', 
      bottom: '5%', 
      left: '8%',
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
          top: '5%', 
          left: '5%', 
          width: '25%', 
          height: '20%',
          background: 'linear-gradient(to bottom, #FFF, #F5F5F5)'
        }} />
        <BedCover style={{ 
          bottom: '0', 
          left: '0', 
          width: '100%', 
          height: '60%',
          background: 'linear-gradient(160deg, #9D7E73 0%, #7D5E53 100%)',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px'
        }}>
          <FabricFolds style={{ 
            bottom: '30%', 
            left: '10%', 
            width: '80%', 
            height: '2px' 
          }} />
          <FabricFolds style={{ 
            bottom: '50%', 
            left: '15%', 
            width: '70%', 
            height: '2px' 
          }} />
        </BedCover>
      </Mattress>
    </BedFrame>
  </BedContainer>
);

export const CanopyBedVertical = () => (
  <BedContainer>
    <Pillar style={{ 
      left: '5%', 
      top: '5%', 
      width: '75%', 
      height: '6%',
      boxShadow: '0 3px 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ left: '20%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ left: '40%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ left: '60%', top: '20%', width: '10%', height: '60%' }} />
    </Pillar>
    <Pillar style={{ 
      left: '5%', 
      bottom: '5%', 
      width: '75%', 
      height: '6%',
      boxShadow: '0 -3px 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ left: '20%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ left: '40%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ left: '60%', top: '20%', width: '10%', height: '60%' }} />
    </Pillar>

    <CanopyTop style={{ 
      left: '5%', 
      top: '5%', 
      height: '90%', 
      width: '8%',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px'
    }} />
    
    <CanopyBackdrop style={{ 
      left: '13%', 
      top: '5%', 
      height: '90%', 
      width: '55%',
      borderTopRightRadius: '30px',
      borderBottomRightRadius: '30px'
    }} />

    <BedFrame style={{ 
      height: '84%', 
      width: '55%', 
      top: '8%', 
      left: '13%',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Mattress style={{ 
        height: '96%', 
        width: '90%',
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '12px'
      }}>
        <Pillow style={{ 
          top: '5%', 
          left: '5%', 
          height: '20%', 
          width: '25%',
          background: 'linear-gradient(to right, #FFF, #F5F5F5)'
        }} />
        <BedCover style={{ 
          left: '0', 
          top: '0', 
          height: '100%', 
          width: '60%',
          background: 'linear-gradient(70deg, #9D7E73 0%, #7D5E53 100%)',
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px'
        }}>
          <FabricFolds style={{ 
            left: '30%', 
            top: '10%', 
            height: '80%', 
            width: '2px',
            transform: 'rotate(180deg)'
          }} />
          <FabricFolds style={{ 
            left: '50%', 
            top: '15%', 
            height: '70%', 
            width: '2px',
            transform: 'rotate(180deg)'
          }} />
        </BedCover>
      </Mattress>
    </BedFrame>
  </BedContainer>
);

export const CanopyBedHorizontal180 = () => (
  <BedContainer>
    <Pillar style={{ 
      right: '5%', 
      top: '5%', 
      width: '6%', 
      height: '75%',
      boxShadow: '3px 0 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ bottom: '20%', right: '20%' }} />
      <Carving style={{ bottom: '40%', right: '20%' }} />
      <Carving style={{ bottom: '60%', right: '20%' }} />
    </Pillar>
    <Pillar style={{ 
      left: '5%', 
      top: '5%', 
      width: '6%', 
      height: '75%',
      boxShadow: '-3px 0 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ bottom: '20%', left: '20%' }} />
      <Carving style={{ bottom: '40%', left: '20%' }} />
      <Carving style={{ bottom: '60%', left: '20%' }} />
    </Pillar>

    <CanopyTop style={{ 
      bottom: '5%', 
      left: '5%', 
      width: '90%', 
      height: '8%',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px'
    }} />
    
    <CanopyBackdrop style={{ 
      bottom: '13%', 
      left: '5%', 
      width: '90%', 
      height: '55%',
      borderTopLeftRadius: '30px',
      borderTopRightRadius: '30px'
    }} />

    <BedFrame style={{ 
      width: '84%', 
      height: '55%', 
      top: '5%', 
      left: '8%',
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
          bottom: '5%', 
          right: '5%', 
          width: '25%', 
          height: '20%',
          background: 'linear-gradient(to top, #FFF, #F5F5F5)'
        }} />
        <BedCover style={{ 
          top: '0', 
          right: '0', 
          width: '100%', 
          height: '60%',
          background: 'linear-gradient(340deg, #9D7E73 0%, #7D5E53 100%)',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        }}>
          <FabricFolds style={{ 
            top: '30%', 
            right: '10%', 
            width: '80%', 
            height: '2px' 
          }} />
          <FabricFolds style={{ 
            top: '50%', 
            right: '15%', 
            width: '70%', 
            height: '2px' 
          }} />
        </BedCover>
      </Mattress>
    </BedFrame>
  </BedContainer>
);

export const CanopyBedVertical270 = () => (
  <BedContainer>
    <Pillar style={{ 
      right: '5%', 
      top: '5%', 
      width: '75%', 
      height: '6%',
      boxShadow: '0 3px 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ right: '20%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ right: '40%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ right: '60%', top: '20%', width: '10%', height: '60%' }} />
    </Pillar>
    <Pillar style={{ 
      right: '5%', 
      bottom: '5%', 
      width: '75%', 
      height: '6%',
      boxShadow: '0 -3px 12px rgba(0,0,0,0.4)'
    }}>
      <Carving style={{ right: '20%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ right: '40%', top: '20%', width: '10%', height: '60%' }} />
      <Carving style={{ right: '60%', top: '20%', width: '10%', height: '60%' }} />
    </Pillar>

    <CanopyTop style={{ 
      right: '5%', 
      top: '5%', 
      height: '90%', 
      width: '8%',
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px'
    }} />
    
    <CanopyBackdrop style={{ 
      right: '13%', 
      top: '5%', 
      height: '90%', 
      width: '55%',
      borderTopLeftRadius: '30px',
      borderBottomLeftRadius: '30px'
    }} />

    <BedFrame style={{ 
      width: '55%', 
      height: '84%', 
      top: '8%', 
      right: '13%',
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '90%', 
        height: '96%',
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px'
      }}>
        <Pillow style={{ 
          top: '5%', 
          right: '5%', 
          width: '20%', 
          height: '25%',
          background: 'linear-gradient(to left, #FFF, #F5F5F5)'
        }} />
        <BedCover style={{ 
          right: '0', 
          top: '0', 
          width: '60%', 
          height: '100%',
          background: 'linear-gradient(290deg, #9D7E73 0%, #7D5E53 100%)',
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px'
        }}>
          <FabricFolds style={{ 
            right: '30%', 
            top: '10%', 
            height: '80%', 
            width: '2px',
            transform: 'rotate(180deg)'
          }} />
          <FabricFolds style={{ 
            right: '50%', 
            top: '15%', 
            height: '70%', 
            width: '2px',
            transform: 'rotate(180deg)'
          }} />
        </BedCover>
      </Mattress>
    </BedFrame>
  </BedContainer>
);

export const CanopyBed = ({ rotation = 0, isRotating = false }) => {
  const getBedComponent = () => {
    switch(rotation) {
      case 0:
        return <CanopyBedHorizontal />;
      case 90:
        return <CanopyBedVertical />;
      case 180:
        return <CanopyBedHorizontal180 />;
      case 270:
        return <CanopyBedVertical270 />;
      default:
        return <CanopyBedHorizontal />;
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

export const CanopyBedItem = {
  name: "Royal Canopy Bed",
  component: CanopyBed,
  positions: [
    { rotation: 0, component: CanopyBedHorizontal },
    { rotation: 90, component: CanopyBedVertical },
    { rotation: 180, component: CanopyBedHorizontal180 },
    { rotation: 270, component: CanopyBedVertical270 }
  ]
};
