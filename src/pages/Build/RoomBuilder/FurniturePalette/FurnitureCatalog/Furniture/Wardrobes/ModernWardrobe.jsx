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
  width: 160px;
  height: 200px;
  position: relative;
`;

const ModernBody = styled.div`
  width: 150px;
  height: 190px;
  background-color: #2F4F4F;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const MirrorDoor = styled.div`
  width: 70px;
  height: 180px;
  background: linear-gradient(135deg, #E6E6FA 25%, #708090 50%, #E6E6FA 75%);
  position: absolute;
  top: 5px;
  left: 5px;
`;

const SlidingDoor = styled.div`
  width: 70px;
  height: 180px;
  background-color: #708090;
  position: absolute;
  top: 5px;
  right: 5px;
`;