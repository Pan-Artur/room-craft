import styled from 'styled-components';

export const ClosetWardrobe = () => {
  return (
    <ClosetContainer>
      <ClosetBody>
        <ClosetRail />
        <ClosetHanger />
        <ClosetHanger />
        <ClosetHanger />
        <ClosetDoor />
      </ClosetBody>
    </ClosetContainer>
  );
};

const ClosetContainer = styled.div`
  width: 150px;
  height: 180px;
  position: relative;
`;

const ClosetBody = styled.div`
  width: 140px;
  height: 170px;
  background-color: #F5DEB3;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const ClosetRail = styled.div`
  width: 120px;
  height: 3px;
  background-color: #A0522D;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const ClosetHanger = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 0 0;
  border: 2px solid #696969;
  position: absolute;
  top: 35px;
  
  &:nth-child(2) { left: 30px; }
  &:nth-child(3) { left: 70px; }
  &:nth-child(4) { left: 110px; }
`;

const ClosetDoor = styled.div`
  width: 60px;
  height: 160px;
  background-color: rgba(245, 222, 179, 0.7);
  border: 2px solid #A0522D;
  position: absolute;
  top: 5px;
  right: 5px;
`;