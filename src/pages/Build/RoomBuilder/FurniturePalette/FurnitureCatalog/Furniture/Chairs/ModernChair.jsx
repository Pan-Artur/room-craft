import styled from 'styled-components';

export const ModernChair = () => {
  return (
    <ModernChairContainer>
      <ModernSeat />
      <ModernBack />
    </ModernChairContainer>
  );
};

const ModernChairContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ModernSeat = styled.div`
  width: 70%;
  height: 70%;
  background-color: #e0e0e0;
  border-radius: 10%;
  position: absolute;
  top: 15%;
  left: 15%;
  box-shadow: 0 0 10% rgba(0, 0, 0, 0.1);
`;

const ModernBack = styled.div`
  width: 70%;
  height: 20%;
  background-color: #a0a0a0;
  border-radius: 10% 10% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
`;