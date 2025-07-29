import styled from 'styled-components';

export const ClassicWardrobe = () => {
  return (
    <WardrobeContainer>
      <WardrobeBody>
        <WardrobeDoor left />
        <WardrobeDoor right />
        <WardrobeKnob left />
        <WardrobeKnob right />
      </WardrobeBody>
    </WardrobeContainer>
  );
};

const WardrobeContainer = styled.div`
  width: 150px;
  height: 200px;
  position: relative;
`;

const WardrobeBody = styled.div`
  width: 140px;
  height: 190px;
  background-color: #8B4513;
  border: 5px solid #654321;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const WardrobeDoor = styled.div`
  width: 65px;
  height: 180px;
  background-color: #A0522D;
  position: absolute;
  top: 5px;
  left: ${props => props.left ? '5px' : 'auto'};
  right: ${props => props.right ? '5px' : 'auto'};
  border: 2px solid #654321;
`;

const WardrobeKnob = styled.div`
  width: 8px;
  height: 8px;
  background-color: #C0C0C0;
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: ${props => props.left ? '15px' : 'auto'};
  right: ${props => props.right ? '15px' : 'auto'};
`;