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
  width: 120px;
  height: 120px;
  position: relative;
`;

const RoundTop = styled.div`
  width: 100px;
  height: 100px;
  background-color: #D2B48C;
  border-radius: 50%;
  border: 3px solid #A0522D;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const CentralLeg = styled.div`
  width: 15px;
  height: 15px;
  background-color: #A0522D;
  border-radius: 50%;
  position: absolute;
  top: 52px;
  left: 52px;
`;