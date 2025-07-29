import styled from 'styled-components';

export const ModernWardrobe = () => {
  return (
    <ModernWardrobeContainer>
      <ModernBody>
        <MirrorDoor />
        <SlidingDoor />
      </ModernBody>
    </ModernWardrobeContainer>
  );
};

const ModernWardrobeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ModernBody = styled.div`
  width: 90%;
  height: 95%;
  background-color: #2F4F4F;
  position: absolute;
  top: 2.5%;
  left: 5%;
`;

const MirrorDoor = styled.div`
  width: 45%;
  height: 95%;
  background: linear-gradient(135deg, #E6E6FA 25%, #708090 50%, #E6E6FA 75%);
  position: absolute;
  top: 2.5%;
  left: 2.5%;
`;

const SlidingDoor = styled.div`
  width: 45%;
  height: 95%;
  background-color: #708090;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
`;