import styled from 'styled-components';

export const FlatTV = () => {
  return (
    <TVContainer>
      <TVScreen>
        <TVContent />
      </TVScreen>
      <TVStand />
      <TVControls />
    </TVContainer>
  );
};

const TVContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
`;

const TVScreen = styled.div`
  width: 160px;
  height: 90px;
  background-color: #111;
  border: 3px solid #333;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  overflow: hidden;
`;

const TVContent = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0066cc 0%, #00ccff 50%, #0066cc 100%);
  position: relative;
  &::after {
    content: '';
    color: white;
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    bottom: 5px;
    right: 5px;
    text-shadow: 1px 1px 2px black;
  }
`;

const TVStand = styled.div`
  width: 40px;
  height: 10px;
  background-color: #444;
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  left: 70px;
`;

const TVControls = styled.div`
  width: 60px;
  height: 5px;
  background-color: #555;
  border-radius: 3px;
  position: absolute;
  bottom: 15px;
  left: 60px;
  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #777;
    border-radius: 50%;
    left: 10px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #777;
    border-radius: 50%;
    right: 10px;
  }
`;