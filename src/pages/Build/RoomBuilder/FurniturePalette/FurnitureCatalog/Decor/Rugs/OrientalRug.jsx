import styled from 'styled-components';

export const OrientalRug = () => {
  return (
    <RugContainer>
      <RugBase>
        <RugPattern />
        <RugBorder />
      </RugBase>
    </RugContainer>
  );
};

const RugContainer = styled.div`
  width: 160px;
  height: 240px;
  position: relative;
`;

const RugBase = styled.div`
  width: 140px;
  height: 220px;
  background-color: #8B0000;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const RugPattern = styled.div`
  width: 100px;
  height: 150px;
  background: linear-gradient(45deg, #FFD700 25%, transparent 25%) -50px 0,
              linear-gradient(-45deg, #FFD700 25%, transparent 25%) -50px 0,
              linear-gradient(45deg, transparent 75%, #FFD700 75%),
              linear-gradient(-45deg, transparent 75%, #FFD700 75%);
  background-size: 100px 100px;
  position: absolute;
  top: 35px;
  left: 20px;
`;

const RugBorder = styled.div`
  width: 130px;
  height: 210px;
  border: 5px solid #FFD700;
  position: absolute;
  top: 5px;
  left: 5px;
`;