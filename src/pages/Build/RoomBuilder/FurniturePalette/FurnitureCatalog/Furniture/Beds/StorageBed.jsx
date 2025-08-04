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
  background: #5D4037;
  position: absolute;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  z-index: 3;
  border: 2px solid #4E342E;
`;

const Mattress = styled.div`
  background: #D7CCC8;
  position: relative;
  border-radius: 8px;
  box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1);
`;

const Pillow = styled.div`
  position: absolute;
  background: #EFEBE9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Blanket = styled.div`
  position: absolute;
  background: #BCAAA4;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Drawer = styled.div`
  position: absolute;
  background: #3E2723;
  border-radius: 5px;
  box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2);
  z-index: 2;
`;

const DrawerHandle = styled.div`
  position: absolute;
  background: #BCAAA4;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;

const CenterPanel = styled.div`
  position: absolute;
  background: #4E342E;
  z-index: 4;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Leg = styled.div`
  position: absolute;
  background: #3E2723;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

export const StorageBedHorizontal = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '85%', 
      height: '75%', 
      bottom: '10%', 
      left: '7.5%',
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '100%', 
        height: '65%',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0'
      }}>
        <Pillow style={{ 
          top: '10%', 
          left: '5%', 
          width: '25%', 
          height: '20%'
        }} />
        <Blanket style={{ 
          bottom: '10%', 
          right: '5%', 
          width: '50%', 
          height: '30%'
        }} />
      </Mattress>
      
      <Drawer style={{ 
        left: '5%', 
        bottom: '0', 
        width: '40%', 
        height: '20%',
        borderBottomLeftRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          width: '20%', 
          height: '10%', 
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <Drawer style={{ 
        right: '5%', 
        bottom: '0', 
        width: '40%', 
        height: '20%',
        borderBottomRightRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          width: '20%', 
          height: '10%', 
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <CenterPanel style={{ 
        width: '10%', 
        height: '20%', 
        bottom: '0', 
        left: '50%',
        transform: 'translateX(-50%)'
      }} />
    </BedFrame>

    <Legs>
      <Leg style={{ 
        left: '11.5%', 
        bottom: '5%', 
        width: '8%', 
        height: '5%'
      }} />
      <Leg style={{ 
        right: '11.5%', 
        bottom: '5%', 
        width: '8%', 
        height: '5%'
      }} />
    </Legs>
  </BedContainer>
);

export const StorageBedVertical = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '75%', 
      height: '85%', 
      right: '10%', 
      top: '7.5%',
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '65%', 
        height: '100%',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
      }}>
        <Pillow style={{ 
          top: '5%', 
          left: '10%', 
          height: '25%', 
          width: '20%'
        }} />
        <Blanket style={{ 
          bottom: '5%', 
          right: '10%', 
          height: '30%', 
          width: '50%'
        }} />
      </Mattress>
      
      <Drawer style={{ 
        top: '5%', 
        right: '0', 
        width: '20%', 
        height: '40%',
        borderTopRightRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          height: '20%', 
          width: '10%', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <Drawer style={{ 
        bottom: '5%', 
        right: '0', 
        width: '20%', 
        height: '40%',
        borderBottomRightRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          height: '20%', 
          width: '10%', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <CenterPanel style={{ 
        height: '10%', 
        width: '20%', 
        right: '0', 
        top: '50%',
        transform: 'translateY(-50%)'
      }} />
    </BedFrame>

    <Legs>
      <Leg style={{ 
        right: '15%', 
        bottom: '11.5%', 
        height: '8%', 
        width: '5%'
      }} />
      <Leg style={{ 
        right: '15%', 
        top: '11.5%', 
        height: '8%', 
        width: '5%'
      }} />
    </Legs>
  </BedContainer>
);

export const StorageBedHorizontal180 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '85%', 
      height: '75%', 
      top: '10%', 
      left: '7.5%',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '100%', 
        height: '65%',
        top: '34%',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0'
      }}>
        <Pillow style={{ 
          bottom: '10%', 
          right: '5%', 
          width: '25%', 
          height: '20%'
        }} />
        <Blanket style={{ 
          top: '10%', 
          left: '5%', 
          width: '50%', 
          height: '30%'
        }} />
      </Mattress>
      
      <Drawer style={{ 
        left: '5%', 
        top: '0', 
        width: '40%', 
        height: '20%',
        borderTopLeftRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          width: '20%', 
          height: '10%', 
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <Drawer style={{ 
        right: '5%', 
        top: '0', 
        width: '40%', 
        height: '20%',
        borderTopRightRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          width: '20%', 
          height: '10%', 
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <CenterPanel style={{ 
        width: '10%', 
        height: '20%', 
        top: '0', 
        left: '50%',
        transform: 'translateX(-50%)'
      }} />
    </BedFrame>

    <Legs>
      <Leg style={{ 
        left: '11.5%', 
        top: '5%', 
        width: '8%', 
        height: '5%'
      }} />
      <Leg style={{ 
        right: '11.5%', 
        top: '5%', 
        width: '8%', 
        height: '5%'
      }} />
    </Legs>
  </BedContainer>
);

export const StorageBedVertical270 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '75%', 
      height: '85%', 
      left: '10%', 
      top: '7.5%',
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px'
    }}>
      <Mattress style={{ 
        width: '65%', 
        height: '100%',
        left: '35%',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
      }}>
        <Pillow style={{ 
          top: '5%', 
          right: '10%', 
          height: '25%', 
          width: '20%'
        }} />
        <Blanket style={{ 
          bottom: '5%', 
          left: '10%', 
          height: '30%', 
          width: '50%'
        }} />
      </Mattress>
      
      <Drawer style={{ 
        top: '5%', 
        left: '0', 
        width: '20%', 
        height: '40%',
        borderTopLeftRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          height: '20%', 
          width: '10%', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <Drawer style={{ 
        bottom: '5%', 
        left: '0', 
        width: '20%', 
        height: '40%',
        borderBottomLeftRadius: '5px'
      }}>
        <DrawerHandle style={{ 
          height: '20%', 
          width: '10%', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </Drawer>
      
      <CenterPanel style={{ 
        height: '10%', 
        width: '20%', 
        left: '0', 
        top: '50%',
        transform: 'translateY(-50%)'
      }} />
    </BedFrame>

    <Legs>
      <Leg style={{ 
        left: '15%', 
        bottom: '11.5%', 
        height: '8%', 
        width: '5%'
      }} />
      <Leg style={{ 
        left: '15%', 
        top: '11.5%', 
        height: '8%', 
        width: '5%'
      }} />
    </Legs>
  </BedContainer>
);

export const StorageBed = ({ rotation = 0, isRotating = false }) => {
  const getBedComponent = () => {
    switch(rotation) {
      case 0:
        return <StorageBedHorizontal />;
      case 90:
        return <StorageBedVertical />;
      case 180:
        return <StorageBedHorizontal180 />;
      case 270:
        return <StorageBedVertical270 />;
      default:
        return <StorageBedHorizontal />;
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

export const StorageBedItem = {
  name: "Storage Bed with Drawers",
  component: StorageBed,
  positions: [
    { rotation: 0, component: StorageBedHorizontal },
    { rotation: 90, component: StorageBedVertical },
    { rotation: 180, component: StorageBedHorizontal180 },
    { rotation: 270, component: StorageBedVertical270 }
  ]
};