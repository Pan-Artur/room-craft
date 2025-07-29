import styled from 'styled-components';

export const SquarePouf = () => {
  return (
    <SquarePoufContainer>
      <SquareTop />
      <SquareBase />
    </SquarePoufContainer>
  );
};

const SquarePoufContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SquareTop = styled.div`
  width: 80%;
  height: 80%;
  background-color: #E0E0E0;
  border-radius: 8%;
  position: absolute;
  top: 10%;
  left: 10%;
  box-shadow: 0 4% 10% rgba(0,0,0,0.1);
`;

const SquareBase = styled.div`
  width: 75%;
  height: 8%;
  background-color: #A0A0A0;
  border-radius: 4%;
  position: absolute;
  bottom: 5%;
  left: 12.5%;
`;