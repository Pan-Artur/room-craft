import styled from 'styled-components';

export const ModernRug = () => {
  return (
    <ModernRugContainer>
      <GeometricPattern />
    </ModernRugContainer>
  );
};

const ModernRugContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GeometricPattern = styled.div`
  width: 80%;
  height: 80%;
  background: 
    linear-gradient(to right, #333 20%, transparent 20%, transparent 80%, #333 80%),
    linear-gradient(to bottom, #333 20%, transparent 20%, transparent 80%, #333 80%);
  background-size: 40% 40%;
  border: 2px solid #333;
`;