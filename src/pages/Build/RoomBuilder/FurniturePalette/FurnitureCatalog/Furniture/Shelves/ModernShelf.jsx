import styled from 'styled-components';

export const ModernShelf = () => {
  return (
    <ModernShelfContainer>
      <MetalShelf />
      <MetalBracket $left />
      <MetalBracket $right />
    </ModernShelfContainer>
  );
};

const ModernShelfContainer = styled.div`
  width: 100%;
  height: 15%;
  position: relative;
`;

const MetalShelf = styled.div`
  width: 90%;
  height: 60%;
  background-color: #C0C0C0;
  box-shadow: 0 2% 5% rgba(0,0,0,0.2);
  position: absolute;
  top: 20%;
  left: 5%;
`;

const MetalBracket = styled.div`
  width: 3%;
  height: 100%;
  background-color: #A9A9A9;
  position: absolute;
  top: 0;
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
`;