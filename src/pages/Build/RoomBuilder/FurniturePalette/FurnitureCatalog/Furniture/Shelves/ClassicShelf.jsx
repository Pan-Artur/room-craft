import styled from 'styled-components';

export const ClassicShelf = () => {
  return (
    <ClassicShelfContainer>
      <ShelfBoard />
      <ShelfSupport $left />
      <ShelfSupport $right />
    </ClassicShelfContainer>
  );
};

const ClassicShelfContainer = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
`;

const ShelfBoard = styled.div`
  width: 90%;
  height: 70%;
  background-color: #8B4513;
  border: 2% solid #654321;
  position: absolute;
  top: 15%;
  left: 5%;
`;

const ShelfSupport = styled.div`
  width: 7%;
  height: 100%;
  background-color: #654321;
  position: absolute;
  top: 0;
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
`;