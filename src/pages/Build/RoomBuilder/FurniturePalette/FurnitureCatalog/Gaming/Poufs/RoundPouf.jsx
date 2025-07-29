import styled from 'styled-components';

export const RoundPouf = () => {
  return (
    <PoufContainer>
      <RoundTop />
      <RoundBase />
    </PoufContainer>
  );
};

const PoufContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const RoundTop = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8B4513;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

const RoundBase = styled.div`
  width: 80px;
  height: 15px;
  background-color: #654321;
  border-radius: 10px;
  position: absolute;
  bottom: 5px;
  left: 20px;
`;