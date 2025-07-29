import styled from 'styled-components';

export const ClassicWardrobe = () => {
  return (
    <WardrobeContainer>
      <WardrobeBody>
        <WardrobeDoor $left />
        <WardrobeDoor $right />
        <WardrobeKnob $left />
        <WardrobeKnob $right />
      </WardrobeBody>
    </WardrobeContainer>
  );
};

const WardrobeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WardrobeBody = styled.div`
  width: 90%;
  height: 95%;
  background-color: #8B4513;
  border: 3% solid #654321;
  position: absolute;
  top: 2.5%;
  left: 5%;
`;

const WardrobeDoor = styled.div`
  width: 45%;
  height: 95%;
  background-color: #A0522D;
  position: absolute;
  top: 2.5%;
  ${props => props.$left ? 'left: 2.5%;' : 'right: 2.5%;'}
  border: 1.5% solid #654321;
`;

const WardrobeKnob = styled.div`
  width: 5%;
  height: 5%;
  background-color: #C0C0C0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${props => props.$left ? 'left: 10%;' : 'right: 10%;'}
  transform: translateY(-50%);
`;