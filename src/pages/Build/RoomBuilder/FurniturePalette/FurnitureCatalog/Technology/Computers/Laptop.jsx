import styled from 'styled-components';

export const Laptop = () => {
  return (
    <LaptopContainer>
      <LaptopBase>
        <KeyboardArea />
        <Touchpad />
      </LaptopBase>
      <LaptopScreen />
    </LaptopContainer>
  );
};

const LaptopContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LaptopBase = styled.div`
  width: 85%;
  height: 65%;
  background-color: #E0E0E0;
  border-radius: 3% 3% 0 0;
  position: absolute;
  bottom: 0;
  left: 7.5%;
`;

const KeyboardArea = styled.div`
  width: 90%;
  height: 60%;
  background-color: #333;
  border-radius: 2%;
  position: absolute;
  top: 10%;
  left: 5%;
`;

const Touchpad = styled.div`
  width: 30%;
  height: 15%;
  background-color: #555;
  border-radius: 1.5%;
  position: absolute;
  bottom: 5%;
  left: 35%;
`;

const LaptopScreen = styled.div`
  width: 85%;
  height: 75%;
  background-color: #0066CC;
  border: 2% solid #E0E0E0;
  border-bottom: none;
  border-radius: 3% 3% 0 0;
  position: absolute;
  top: 0;
  left: 7.5%;
  &::after {
    content: '';
    color: white;
    font-size: 50%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`;