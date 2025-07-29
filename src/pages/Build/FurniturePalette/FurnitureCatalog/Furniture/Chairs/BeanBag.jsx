import styled from 'styled-components';

export const BeanBag = () => {
  return (
    <ChairContainer>
      <Bag />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const Bag = styled.div`
  width: 80px;
  height: 80px;
  background-color: #7E57C2;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
  top: 10px;
  left: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
`;
