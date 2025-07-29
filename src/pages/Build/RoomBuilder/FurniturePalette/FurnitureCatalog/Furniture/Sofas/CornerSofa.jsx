import styled from 'styled-components';

export const CornerSofa = () => {
  return (
    <CornerSofaContainer>
      <CornerBase />
      <CornerExtension />
    </CornerSofaContainer>
  );
};

const CornerSofaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CornerBase = styled.div`
  width: 65%;
  height: 65%;
  background-color: #5d4037;
  border-radius: 8%;
  position: absolute;
  top: 35%;
  left: 35%;
`;

const CornerExtension = styled.div`
  width: 35%;
  height: 35%;
  background-color: #4e342e;
  border-radius: 0 8% 8% 0;
  position: absolute;
  top: 65%;
  left: 0;
`;