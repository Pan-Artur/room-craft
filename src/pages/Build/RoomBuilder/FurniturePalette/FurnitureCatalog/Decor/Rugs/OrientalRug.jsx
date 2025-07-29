import styled from 'styled-components';

export const OrientalRug = () => {
  return (
    <RugContainer>
      <RugPattern />
      <RugBorder />
    </RugContainer>
  );
};

const RugContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RugPattern = styled.div`
  width: 60%;
  height: 80%;
  background: 
    linear-gradient(45deg, #FFD700 25%, transparent 25%) -25% 0,
    linear-gradient(-45deg, #FFD700 25%, transparent 25%) -25% 0,
    linear-gradient(45deg, transparent 75%, #FFD700 75%),
    linear-gradient(-45deg, transparent 75%, #FFD700 75%);
  background-size: 50% 50%;
  background-color: #8B0000;
`;

const RugBorder = styled.div`
  width: 80%;
  height: 90%;
  border: 3% solid #FFD700;
  position: absolute;
  pointer-events: none;
`;