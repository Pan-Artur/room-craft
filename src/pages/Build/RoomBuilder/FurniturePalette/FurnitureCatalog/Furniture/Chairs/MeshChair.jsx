import styled from 'styled-components';

export const MeshChair = () => {
  return (
    <ChairContainer>
      <ChairFrame>
        <MeshPattern>
          {[...Array(10)].map((_, i) => (
            <MeshRow key={i}>
              {[...Array(10)].map((_, j) => (
                <MeshCell key={j} />
              ))}
            </MeshRow>
          ))}
        </MeshPattern>
        <ChairLegs>
          <Leg />
          <Leg />
          <Leg />
          <Leg />
        </ChairLegs>
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
  border: 5px solid #424242;
  border-radius: 5px;
  position: absolute;
  top: 10%;
  left: 10%;
  overflow: hidden;
`;

const MeshPattern = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MeshRow = styled.div`
  display: flex;
  flex: 1;
`;

const MeshCell = styled.div`
  flex: 1;
  border-right: 1px solid #424242;
  border-bottom: 1px solid #424242;
  
  &:last-child {
    border-right: none;
  }
`;

const ChairLegs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Leg = styled.div`
  position: absolute;
  width: 10%;
  height: 10%;
  background-color: #424242;
  
  &:nth-child(1) {
    bottom: 0;
    left: 0;
    border-radius: 0 0 0 5px;
  }
  &:nth-child(2) {
    bottom: 0;
    right: 0;
    border-radius: 0 0 5px 0;
  }
  &:nth-child(3) {
    top: 0;
    left: 0;
    border-radius: 0 5px 0 0;
  }
  &:nth-child(4) {
    top: 0;
    right: 0;
    border-radius: 5px 0 0 0;
  }
`;