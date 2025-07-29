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
  width: 100%;
  height: 100%;
  position: relative;
`;

const ClosetBody = styled.div`
  width: 90%;
  height: 95%;
  background-color: #F5DEB3;
  position: absolute;
  top: 2.5%;
  left: 5%;
`;

const ClosetRail = styled.div`
  width: 85%;
  height: 1.5%;
  background-color: #A0522D;
  position: absolute;
  top: 15%;
  left: 7.5%;
`;

const ClosetHanger = styled.div`
  width: 13%;
  height: 13%;
  border-radius: 50% 50% 0 0;
  border: 1.5% solid #696969;
  position: absolute;
  top: 17%;
  
  &:nth-child(2) { left: 20%; }
  &:nth-child(3) { left: 50%; }
  &:nth-child(4) { left: 80%; }
`;

const ClosetDoor = styled.div`
  width: 40%;
  height: 90%;
  background-color: rgba(245, 222, 179, 0.7);
  border: 1.5% solid #A0522D;
  position: absolute;
  top: 5%;
  right: 5%;
`;