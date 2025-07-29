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
  width: 100%;
  height: 100%;
  position: relative;
`;

const GlassTop = styled.div`
  width: 85%;
  height: 85%;
  background: rgba(200, 220, 255, 0.3);
  border: 1.5% solid #C0C0C0;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`;

const MetalBase = styled.div`
  width: 65%;
  height: 65%;
  border: 2% solid #A9A9A9;
  position: absolute;
  top: 17.5%;
  left: 17.5%;
`;