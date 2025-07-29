import styled from 'styled-components';

export const ModernTable = () => {
  return (
    <ModernTableContainer>
      <GlassTop />
      <MetalBase />
    </ModernTableContainer>
  );
};

const ModernTableContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
`;

const GlassTop = styled.div`
  width: 130px;
  height: 130px;
  background: rgba(200, 220, 255, 0.3);
  border: 2px solid #C0C0C0;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 10px;
  left: 10px;
`;

const MetalBase = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #A9A9A9;
  position: absolute;
  top: 25px;
  left: 25px;
`;