import styled from 'styled-components';

export const CoffeeTable = () => {
  return (
    <CoffeeTableContainer>
      <RoundTop />
      <CentralLeg />
    </CoffeeTableContainer>
  );
};

const CoffeeTableContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const RoundTop = styled.div`
  width: 80%;
  height: 80%;
  background-color: #D2B48C;
  border-radius: 50%;
  border: 2% solid #A0522D;
  position: absolute;
  top: 10%;
  left: 10%;
`;

const CentralLeg = styled.div`
  width: 10%;
  height: 10%;
  background-color: #A0522D;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  left: 45%;
`;