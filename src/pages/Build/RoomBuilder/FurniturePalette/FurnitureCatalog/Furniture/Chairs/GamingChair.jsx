import styled from 'styled-components';

export const GamingChair = () => {
  return (
    <GamingChairContainer>
      <GamingSeat />
      <GamingBack />
      <GamingWings />
    </GamingChairContainer>
  );
};

const GamingChairContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const GamingSeat = styled.div`
  width: 80px;
  height: 80px;
  background-color: #1a1a1a;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const GamingBack = styled.div`
  width: 80px;
  height: 30px;
  background-color: #ff4500; 
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 0;
  left: 20px;
`;

const GamingWings = styled.div`
  width: 20px;
  height: 60px;
  background-color: #1a1a1a;
  position: absolute;
  top: 30px;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 60px;
    background-color: #1a1a1a;
    right: -100px;
  }
`;
