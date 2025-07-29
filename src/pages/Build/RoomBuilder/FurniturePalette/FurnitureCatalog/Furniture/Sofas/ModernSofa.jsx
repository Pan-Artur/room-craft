import styled from 'styled-components';

export const ModernSofa = () => {
  return (
    <ModernSofaContainer>
      <ModernSofaBase />
      <ModernSofaBack />
    </ModernSofaContainer>
  );
};

const ModernSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ModernSofaBase = styled.div`
  width: 90%;
  height: 70%;
  background-color: #2c3e50;
  border-radius: 12%;
  position: absolute;
  top: 30%;
  left: 5%;
`;

const ModernSofaBack = styled.div`
  width: 90%;
  height: 12%;
  background-color: #34495e;
  border-radius: 12% 12% 0 0;
  position: absolute;
  top: 18%;
  left: 5%;
`;