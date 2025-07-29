import styled from 'styled-components';

export const StarPouf = () => {
  return (
    <StarPoufContainer>
      <StarShape />
      <StarCenter />
    </StarPoufContainer>
  );
};

const StarPoufContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StarShape = styled.div`
  width: 80%;
  height: 80%;
  background-color: #FF6B6B;
  clip-path: polygon(
    50% 0%, 
    61% 35%, 
    98% 35%, 
    68% 57%, 
    79% 91%, 
    50% 70%, 
    21% 91%, 
    32% 57%, 
    2% 35%, 
    39% 35%
  );
  position: absolute;
  top: 10%;
  left: 10%;
`;

const StarCenter = styled.div`
  width: 25%;
  height: 25%;
  background-color: #FFE66D;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;