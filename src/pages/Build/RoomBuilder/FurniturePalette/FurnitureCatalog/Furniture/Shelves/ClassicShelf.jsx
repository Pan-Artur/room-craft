import styled from 'styled-components';

export const ClassicShelf = () => {
  return (
    <ClassicShelfContainer>
      <ShelfBoard />
      <ShelfSupport left />
      <ShelfSupport right />
    </ClassicShelfContainer>
  );
};

const ClassicShelfContainer = styled.div`
  width: 150px;
  height: 30px;
  position: relative;
`;

const ShelfBoard = styled.div`
  width: 140px;
  height: 20px;
  background-color: #8B4513;
  border: 2px solid #654321;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const ShelfSupport = styled.div`
  width: 10px;
  height: 30px;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: ${props => props.left ? '0' : 'auto'};
  right: ${props => props.right ? '0' : 'auto'};
`;