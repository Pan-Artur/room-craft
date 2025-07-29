import styled from 'styled-components';

export const FoldingSofa = () => {
  return (
    <FoldingSofaContainer>
      <FoldingBase />
      <FoldingBack />
      <FoldingSeam />
    </FoldingSofaContainer>
  );
};

const FoldingSofaContainer = styled.div`
  width: 200px;
  height: 100px;
  position: relative;
`;

const FoldingBase = styled.div`
  width: 180px;
  height: 70px;
  background-color: #3e2723;
  border-radius: 5px;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const FoldingBack = styled.div`
  width: 180px;
  height: 20px;
  background-color: #4e342e;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const FoldingSeam = styled.div`
  width: 5px;
  height: 70px;
  background-color: #5d4037;
  position: absolute;
  top: 30px;
  left: 100px;
`;