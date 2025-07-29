import styled from 'styled-components';

export const ClassicSofa = () => {
  return (
    <ClassicSofaContainer>
      <SofaBase />
      <SofaBack />
      <SofaArmrest left />
      <SofaArmrest right />
    </ClassicSofaContainer>
  );
};

const ClassicSofaContainer = styled.div`
  width: 200px;
  height: 120px;
  position: relative;
`;

const SofaBase = styled.div`
  width: 180px;
  height: 80px;
  background-color: #8b4513;
  border-radius: 10px;
  position: absolute;
  top: 40px;
  left: 10px;
`;

const SofaBack = styled.div`
  width: 180px;
  height: 20px;
  background-color: #654321;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 20px;
  left: 10px;
`;

const SofaArmrest = styled.div`
  width: 20px;
  height: 60px;
  background-color: #654321;
  border-radius: 5px;
  position: absolute;
  top: 30px;
  left: ${props => props.left ? '0' : 'auto'};
  right: ${props => props.right ? '0' : 'auto'};
`;