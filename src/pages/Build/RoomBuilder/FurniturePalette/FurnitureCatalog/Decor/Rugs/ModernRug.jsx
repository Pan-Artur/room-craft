import styled from 'styled-components';

export const ModernRug = () => {
  return (
    <ModernRugContainer>
      <ModernRugBase>
        <GeometricPattern />
      </ModernRugBase>
    </ModernRugContainer>
  );
};

const ModernRugContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
`;

const ModernRugBase = styled.div`
  width: 180px;
  height: 130px;
  background-color: #F5F5F5;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const GeometricPattern = styled.div`
  width: 160px;
  height: 110px;
  background: 
    linear-gradient(to right, #333 20%, transparent 20%, transparent 80%, #333 80%),
    linear-gradient(to bottom, #333 20%, transparent 20%, transparent 80%, #333 80%);
  background-size: 40px 40px;
  position: absolute;
  top: 10px;
  left: 10px;
`;