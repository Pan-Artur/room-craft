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
  width: 220px;
  height: 100px;
  position: relative;
`;

const ModernSofaBase = styled.div`
  width: 200px;
  height: 70px;
  background-color: #2c3e50;
  border-radius: 15px;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const ModernSofaBack = styled.div`
  width: 200px;
  height: 15px;
  background-color: #34495e;
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 15px;
  left: 10px;
`;