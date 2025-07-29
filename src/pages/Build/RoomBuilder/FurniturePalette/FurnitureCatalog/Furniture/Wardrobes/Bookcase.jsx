import styled from 'styled-components';

export const Bookcase = () => {
  return (
    <BookcaseContainer>
      <BookcaseBody>
        <BookcaseShelf />
        <BookcaseShelf />
        <BookcaseShelf />
        <BookcaseShelf />
      </BookcaseBody>
    </BookcaseContainer>
  );
};

const BookcaseContainer = styled.div`
  width: 120px;
  height: 220px;
  position: relative;
`;

const BookcaseBody = styled.div`
  width: 110px;
  height: 210px;
  background-color: #DEB887;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const BookcaseShelf = styled.div`
  width: 100px;
  height: 3px;
  background-color: #8B4513;
  position: absolute;
  left: 5px;
  
  &:nth-child(1) { top: 30px; }
  &:nth-child(2) { top: 70px; }
  &:nth-child(3) { top: 110px; }
  &:nth-child(4) { top: 150px; }
`;