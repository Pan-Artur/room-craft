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
  width: 100%;
  height: 100%;
  position: relative;
`;

const GamingSeat = styled.div`
  width: 70%;
  height: 70%;
  background-color: #1a1a1a;
  border-radius: 10%;
  position: absolute;
  top: 15%;
  left: 15%;
`;

const GamingBack = styled.div`
  width: 70%;
  height: 25%;
  background-color: #ff4500; 
  border-radius: 10% 10% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
`;

const GamingWings = styled.div`
  width: 15%;
  height: 50%;
  background-color: #1a1a1a;
  position: absolute;
  top: 25%;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    width: 15%;
    height: 50%;
    background-color: #1a1a1a;
    right: -85%;
  }
`;