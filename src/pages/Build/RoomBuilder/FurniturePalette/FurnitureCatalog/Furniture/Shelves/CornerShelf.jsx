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
  width: 120px;
  height: 120px;
  position: relative;
`;

const CornerBoard = styled.div`
  width: 100px;
  height: 100px;
  background-color: #D2B48C;
  border: 3px solid #A0522D;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  position: absolute;
  top: 10px;
  left: 10px;
`;

const WallSupport = styled.div`
  width: 5px;
  height: 110px;
  background-color: #A0522D;
  position: absolute;
  top: 5px;
  left: 5px;
  transform: rotate(45deg);
  transform-origin: top left;
`;