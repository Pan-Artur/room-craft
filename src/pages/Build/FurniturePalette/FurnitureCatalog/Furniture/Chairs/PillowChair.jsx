import styled from 'styled-components';

export const PillowChair = () => {
  return (
    <ChairContainer>
      <ChairBase />
      <ChairPillow />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ChairBase = styled.div`
  width: 80px;
  height: 80px;
  background-color: #BCAAA4;
  border-radius: 15px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ChairPillow = styled.div`
  width: 60px;
  height: 60px;
  background-color: #A1887F;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
`;
