import styled from 'styled-components';

export const MeshChair = () => {
  return (
    <ChairContainer>
      <ChairFrame>
        <ChairCross />
        <ChairCross rotate />
      </ChairFrame>
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ChairFrame = styled.div`
  width: 80px;
  height: 80px;
  border: 5px solid #424242;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ChairCross = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #424242;
    top: 50%;
    transform: translateY(-50%) ${props => props.rotate && 'rotate(90deg)'};
  }
`;
