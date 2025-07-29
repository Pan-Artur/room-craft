import styled from 'styled-components';

export const ModernShelf = () => {
  return (
    <ModernShelfContainer>
      <MetalShelf />
      <MetalBracket left />
      <MetalBracket right />
    </ModernShelfContainer>
  );
};

const ModernShelfContainer = styled.div`
  width: 160px;
  height: 25px;
  position: relative;
`;

const MetalShelf = styled.div`
  width: 150px;
  height: 15px;
  background-color: #C0C0C0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  position: absolute;
  top: 5px;
  left: 5px;
`;

const MetalBracket = styled.div`
  width: 5px;
  height: 25px;
  background-color: #A9A9A9;
  position: absolute;
  top: 0;
  left: ${props => props.left ? '0' : 'auto'};
  right: ${props => props.right ? '0' : 'auto'};
`;