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
  width: 120px;
  height: 120px;
  position: relative;
`;

const SquareTop = styled.div`
  width: 100px;
  height: 100px;
  background-color: #E0E0E0;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const SquareBase = styled.div`
  width: 90px;
  height: 10px;
  background-color: #A0A0A0;
  border-radius: 5px;
  position: absolute;
  bottom: 5px;
  left: 15px;
`;