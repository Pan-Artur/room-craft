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
  width: 140px;
  height: 200px;
  position: relative;
`;

const ShelfBody = styled.div`
  width: 130px;
  height: 190px;
  background-color: #D2B48C;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const Shelf = styled.div`
  width: 120px;
  height: 3px;
  background-color: #A0522D;
  position: absolute;
  left: 5px;
  top: ${props => props.top || '40px'};
  
  &:nth-child(2) {
    top: 80px;
  }
  
  &:nth-child(3) {
    top: 120px;
  }
`;

const ShelfDoor = styled.div`
  width: 60px;
  height: 180px;
  background-color: rgba(210, 180, 140, 0.7);
  border: 2px solid #A0522D;
  position: absolute;
  top: 5px;
  right: 5px;
`;