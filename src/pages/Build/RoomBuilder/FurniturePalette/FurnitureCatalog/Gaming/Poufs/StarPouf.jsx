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
  width: 120px;
  height: 120px;
  position: relative;
`;

const StarShape = styled.div`
  width: 100px;
  height: 100px;
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
  top: 10px;
  left: 10px;
`;

const StarCenter = styled.div`
  width: 30px;
  height: 30px;
  background-color: #FFE66D;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;