import styled from 'styled-components';

export const CocoonChair = () => {
  return (
    <ChairContainer>
      <ChairShell />
      <ChairOpening />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const ChairShell = styled.div`
  width: 100px;
  height: 100px;
  background-color: #6D4C41;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ChairOpening = styled.div`
  width: 60px;
  height: 60px;
  background-color: #8D6E63;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
`;
