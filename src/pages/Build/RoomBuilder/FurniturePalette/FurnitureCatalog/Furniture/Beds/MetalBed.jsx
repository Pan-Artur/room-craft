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
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border: 3px solid #cfcfcf;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mattress = styled.div`
  background: #fff8e1;
  position: relative;
  border-radius: 3px;
  box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1);
`;

const Pillow = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 -2px 5px rgba(0,0,0,0.1);
`;

const Blanket = styled.div`
  position: absolute;
  background: #bbdefb;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Headboard = styled.div`
  position: absolute;
  background: linear-gradient(to right, #616161, #9e9e9e, #616161);
  border-radius: 5px;
  z-index: 4;
`;

const Footboard = styled.div`
  position: absolute;
  background: linear-gradient(to right, #616161, #9e9e9e, #616161);
  border-radius: 5px;
  z-index: 4;
`;

const Legs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Leg = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, #424242, #616161);
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

export const MetalBedHorizontal = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '85%', 
      height: '75%', 
      bottom: '10%', 
      left: '7.5%'
    }}>
      <Mattress style={{ 
        width: '92%', 
        height: '85%'
      }}>
        <Pillow style={{ 
          top: '5%', 
          left: '5%', 
          width: '25%', 
          height: '15%'
        }} />
        <Blanket style={{ 
          bottom: '5%', 
          left: '5%', 
          width: '90%', 
          height: '40%'
        }} />
      </Mattress>
    </BedFrame>

    <Headboard style={{ 
      top: '15%', 
      left: '7.5%', 
      width: '85%', 
      height: '12%',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }} />

    <Footboard style={{ 
      bottom: '10%', 
      left: '7.5%', 
      width: '85%', 
      height: '7%',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }} />

    <Legs>
      <Leg style={{ 
        left: '11.5%', 
        bottom: '5%', 
        width: '4%', 
        height: '7%'
      }} />
      <Leg style={{ 
        right: '11.5%', 
        bottom: '5%', 
        width: '4%', 
        height: '7%'
      }} />
      <Leg style={{ 
        left: '11.5%', 
        top: '68%', 
        width: '4%', 
        height: '7%'
      }} />
      <Leg style={{ 
        right: '11.5%', 
        top: '68%', 
        width: '4%', 
        height: '7%'
      }} />
    </Legs>
  </BedContainer>
);

export const MetalBedVertical = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '75%', 
      height: '85%', 
      right: '10%', 
      top: '7.5%'
    }}>
      <Mattress style={{ 
        width: '85%', 
        height: '92%'
      }}>
        <Pillow style={{ 
          top: '5%', 
          left: '5%', 
          height: '25%', 
          width: '15%'
        }} />
        <Blanket style={{ 
          bottom: '5%', 
          left: '5%', 
          height: '40%', 
          width: '90%'
        }} />
      </Mattress>
    </BedFrame>

    <Headboard style={{ 
      right: '10%', 
      top: '7.5%', 
      height: '85%', 
      width: '12%',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }} />

    <Footboard style={{ 
      right: '10%', 
      bottom: '7.5%', 
      height: '85%', 
      width: '7%',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }} />

    <Legs>
      <Leg style={{ 
        right: '15%', 
        bottom: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
      <Leg style={{ 
        right: '15%', 
        top: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
      <Leg style={{ 
        left: '68%', 
        bottom: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
      <Leg style={{ 
        left: '68%', 
        top: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
    </Legs>
  </BedContainer>
);

export const MetalBedHorizontal180 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '85%', 
      height: '75%', 
      top: '10%', 
      left: '7.5%'
    }}>
      <Mattress style={{ 
        width: '92%', 
        height: '85%'
      }}>
        <Pillow style={{ 
          bottom: '5%', 
          right: '5%', 
          width: '25%', 
          height: '15%'
        }} />
        <Blanket style={{ 
          top: '5%', 
          right: '5%', 
          width: '90%', 
          height: '40%'
        }} />
      </Mattress>
    </BedFrame>

    <Headboard style={{ 
      bottom: '15%', 
      left: '7.5%', 
      width: '85%', 
      height: '12%',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }} />

    <Footboard style={{ 
      top: '10%', 
      left: '7.5%', 
      width: '85%', 
      height: '7%',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }} />

    <Legs>
      <Leg style={{ 
        left: '11.5%', 
        top: '5%', 
        width: '4%', 
        height: '7%'
      }} />
      <Leg style={{ 
        right: '11.5%', 
        top: '5%', 
        width: '4%', 
        height: '7%'
      }} />
      <Leg style={{ 
        left: '11.5%', 
        bottom: '68%', 
        width: '4%', 
        height: '7%'
      }} />
      <Leg style={{ 
        right: '11.5%', 
        bottom: '68%', 
        width: '4%', 
        height: '7%'
      }} />
    </Legs>
  </BedContainer>
);

export const MetalBedVertical270 = () => (
  <BedContainer>
    <BedFrame style={{ 
      width: '75%', 
      height: '85%', 
      left: '10%', 
      top: '7.5%'
    }}>
      <Mattress style={{ 
        width: '85%', 
        height: '92%'
      }}>
        <Pillow style={{ 
          top: '5%', 
          right: '5%', 
          height: '25%', 
          width: '15%'
        }} />
        <Blanket style={{ 
          bottom: '5%', 
          right: '5%', 
          height: '40%', 
          width: '90%'
        }} />
      </Mattress>
    </BedFrame>

    <Headboard style={{ 
      left: '10%', 
      top: '7.5%', 
      height: '85%', 
      width: '12%',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }} />

    <Footboard style={{ 
      left: '10%', 
      bottom: '7.5%', 
      height: '85%', 
      width: '7%',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }} />

    <Legs>
      <Leg style={{ 
        left: '15%', 
        bottom: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
      <Leg style={{ 
        left: '15%', 
        top: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
      <Leg style={{ 
        right: '68%', 
        bottom: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
      <Leg style={{ 
        right: '68%', 
        top: '11.5%', 
        height: '4%', 
        width: '7%'
      }} />
    </Legs>
  </BedContainer>
);

export const MetalBed = ({ rotation = 0, isRotating = false }) => {
  const getBedComponent = () => {
    switch(rotation) {
      case 0:
        return <MetalBedHorizontal />;
      case 90:
        return <MetalBedVertical />;
      case 180:
        return <MetalBedHorizontal180 />;
      case 270:
        return <MetalBedVertical270 />;
      default:
        return <MetalBedHorizontal />;
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

export const MetalBedItem = {
  name: "Modern Metal Bed",
  component: MetalBed,
  positions: [
    { rotation: 0, component: MetalBedHorizontal },
    { rotation: 90, component: MetalBedVertical },
    { rotation: 180, component: MetalBedHorizontal180 },
    { rotation: 270, component: MetalBedVertical270 }
  ]
};