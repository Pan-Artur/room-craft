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
  width: 150px;
  height: 120px;
  position: relative;
`;

const LaptopBase = styled.div`
  width: 130px;
  height: 80px;
  background-color: #E0E0E0;
  border-radius: 5px 5px 0 0;
  position: absolute;
  bottom: 0;
  left: 10px;
`;

const KeyboardArea = styled.div`
  width: 120px;
  height: 50px;
  background-color: #333;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 5px;
`;

const Touchpad = styled.div`
  width: 40px;
  height: 20px;
  background-color: #555;
  border-radius: 2px;
  position: absolute;
  bottom: 5px;
  left: 45px;
`;

const LaptopScreen = styled.div`
  width: 130px;
  height: 90px;
  background-color: #0066CC;
  border: 3px solid #E0E0E0;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 0;
  left: 10px;
  &::after {
    content: '';
    color: white;
    font-size: 10px;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;