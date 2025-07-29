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
  width: 100%;
  height: 100%;
  position: relative;
`;

const RoundTop = styled.div`
  width: 80%;
  height: 80%;
  background-color: #8B4513;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 10%;
  box-shadow: 0 4% 10% rgba(0,0,0,0.2);
`;

const RoundBase = styled.div`
  width: 65%;
  height: 12%;
  background-color: #654321;
  border-radius: 8%;
  position: absolute;
  bottom: 5%;
  left: 17.5%;
`;