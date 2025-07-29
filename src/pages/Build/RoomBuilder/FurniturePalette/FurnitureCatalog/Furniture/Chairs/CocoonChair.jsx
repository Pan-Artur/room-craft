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
  width: 100%;
  height: 100%;
  position: relative;
`;

const ChairShell = styled.div`
  width: 80%;
  height: 80%;
  background-color: #6D4C41;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
  top: 10%;
  left: 10%;
`;

const ChairOpening = styled.div`
  width: 50%;
  height: 50%;
  background-color: #8D6E63;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
`;