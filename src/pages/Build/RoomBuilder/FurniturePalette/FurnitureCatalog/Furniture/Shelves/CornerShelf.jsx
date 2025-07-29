import styled from 'styled-components';

export const CornerShelf = () => {
  return (
    <CornerShelfContainer>
      <CornerBoard />
      <WallSupport />
    </CornerShelfContainer>
  );
};

const CornerShelfContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CornerBoard = styled.div`
  width: 80%;
  height: 80%;
  background-color: #D2B48C;
  border: 2.5% solid #A0522D;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  position: absolute;
  top: 10%;
  left: 10%;
`;

const WallSupport = styled.div`
  width: 4%;
  height: 90%;
  background-color: #A0522D;
  position: absolute;
  top: 5%;
  left: 5%;
  transform: rotate(45deg);
  transform-origin: top left;
`;