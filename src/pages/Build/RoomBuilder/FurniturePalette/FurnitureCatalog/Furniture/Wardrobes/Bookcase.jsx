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
  width: 100%;
  height: 100%;
  position: relative;
`;

const BookcaseBody = styled.div`
  width: 90%;
  height: 95%;
  background-color: #DEB887;
  position: absolute;
  top: 2.5%;
  left: 5%;
`;

const BookcaseShelf = styled.div`
  width: 85%;
  height: 1.5%;
  background-color: #8B4513;
  position: absolute;
  left: 5%;
  
  &:nth-child(1) { top: 15%; }
  &:nth-child(2) { top: 35%; }
  &:nth-child(3) { top: 55%; }
  &:nth-child(4) { top: 75%; }
`;