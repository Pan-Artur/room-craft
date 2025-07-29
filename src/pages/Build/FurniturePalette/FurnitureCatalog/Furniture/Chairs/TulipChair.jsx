import styled from 'styled-components';

export const TulipChair = () => {
  return (
    <ChairContainer>
      <Seat />
      <Base />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const Seat = styled.div`
  width: 60px;
  height: 60px;
  background-color: #E91E63;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 2;
`;

const Base = styled.div`
  width: 30px;
  height: 60px;
  background-color: #F8BBD0;
  border-radius: 50% / 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  bottom: 0;
  left: 35px;
  z-index: 1;
`;
