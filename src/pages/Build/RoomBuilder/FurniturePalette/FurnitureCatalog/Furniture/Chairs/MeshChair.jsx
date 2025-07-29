import styled from 'styled-components';

export const MeshChair = () => {
  return (
    <ChairContainer>
      <ChairFrame>
        <ChairCross />
        <ChairCross $rotate />
      </ChairFrame>
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ChairFrame = styled.div`
  width: 80%;
  height: 80%;
  border: 5% solid #424242;
  border-radius: 5%;
  position: absolute;
  top: 10%;
  left: 10%;
`;

const ChairCross = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5%;
    background-color: #424242;
    top: 50%;
    transform: translateY(-50%) ${props => props.$rotate && 'rotate(90deg)'};
  }
`;