import styled from 'styled-components';

export const ShelfWardrobe = () => {
  return (
    <ShelfWardrobeContainer>
      <ShelfBody>
        <Shelf />
        <Shelf />
        <Shelf />
        <ShelfDoor />
      </ShelfBody>
    </ShelfWardrobeContainer>
  );
};

const ShelfWardrobeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ShelfBody = styled.div`
  width: 90%;
  height: 95%;
  background-color: #D2B48C;
  position: absolute;
  top: 2.5%;
  left: 5%;
`;

const Shelf = styled.div`
  width: 85%;
  height: 1.5%;
  background-color: #A0522D;
  position: absolute;
  left: 5%;
  
  &:nth-child(1) { top: 20%; }
  &:nth-child(2) { top: 45%; }
  &:nth-child(3) { top: 70%; }
`;

const ShelfDoor = styled.div`
  width: 40%;
  height: 90%;
  background-color: rgba(210, 180, 140, 0.7);
  border: 1.5% solid #A0522D;
  position: absolute;
  top: 5%;
  right: 5%;
`;