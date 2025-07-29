import styled from 'styled-components';

export const LeafyPlant = () => {
  return (
    <PlantContainer>
      <Pot />
      <Leaf big />
      <Leaf medium rotate="30deg" />
      <Leaf small rotate="-20deg" />
    </PlantContainer>
  );
};

const PlantContainer = styled.div`
  width: 120px;
  height: 140px;
  position: relative;
`;

const Pot = styled.div`
  width: 70px;
  height: 50px;
  background-color: #D2B48C;
  border-radius: 0 0 15px 15px;
  position: absolute;
  bottom: 0;
  left: 25px;
`;

const Leaf = styled.div`
  width: ${props => props.big ? '60px' : props.medium ? '40px' : '30px'};
  height: ${props => props.big ? '40px' : props.medium ? '30px' : '20px'};
  background-color: #3CB371;
  border-radius: 50% 0 50% 50%;
  position: absolute;
  bottom: ${props => props.big ? '50px' : props.medium ? '70px' : '60px'};
  left: ${props => props.big ? '30px' : props.medium ? '50px' : '20px'};
  transform: rotate(${props => props.rotate || '0'});
`;