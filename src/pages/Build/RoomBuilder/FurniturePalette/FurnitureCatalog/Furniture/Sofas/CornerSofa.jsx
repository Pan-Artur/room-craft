import styled from 'styled-components';

export const CornerSofa = () => {
  return (
    <CornerSofaContainer>
      <CornerBase />
      <CornerExtension />
    </CornerSofaContainer>
  );
};

const CornerSofaContainer = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
`;

const CornerBase = styled.div`
  width: 120px;
  height: 120px;
  background-color: #5d4037;
  border-radius: 10px;
  position: absolute;
  top: 60px;
  left: 60px;
`;

const CornerExtension = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e342e;
  border-radius: 0 10px 10px 0;
  position: absolute;
  top: 120px;
  left: 0;
`;