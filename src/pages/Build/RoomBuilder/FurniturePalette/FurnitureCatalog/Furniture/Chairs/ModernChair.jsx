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
  width: 100px;
  height: 100px;
  position: relative;
`;

const ModernSeat = styled.div`
  width: 70px;
  height: 70px;
  background-color: #e0e0e0;
  border-radius: 10px;
  position: absolute;
  top: 15px;
  left: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ModernBack = styled.div`
  width: 70px;
  height: 20px;
  background-color: #a0a0a0;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: 0;
  left: 15px;
`;
