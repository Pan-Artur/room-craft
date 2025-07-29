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
  width: 100%;
  height: 100%;
  position: relative;
`;

const FoldingBase = styled.div`
  width: 90%;
  height: 70%;
  background-color: #3e2723;
  border-radius: 4%;
  position: absolute;
  top: 30%;
  left: 5%;
`;

const FoldingBack = styled.div`
  width: 90%;
  height: 15%;
  background-color: #4e342e;
  border-radius: 4% 4% 0 0;
  position: absolute;
  top: 15%;
  left: 5%;
`;

const FoldingSeam = styled.div`
  width: 3%;
  height: 70%;
  background-color: #5d4037;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;