import styled from 'styled-components';

export const LeafyPlant = () => {
  return (
    <PlantContainer>
      <Pot />
      <Leaf $big />
      <Leaf $medium $rotate="30deg" />
      <Leaf $small $rotate="-20deg" />
    </PlantContainer>
  );
};

const PlantContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Pot = styled.div`
  width: 60%;
  height: 30%;
  background-color: #D2B48C;
  border-radius: 0 0 15% 15%;
  position: relative;
`;

const Leaf = styled.div`
  width: ${props => props.$big ? '50%' : props.$medium ? '35%' : '25%'};
  height: ${props => props.$big ? '30%' : props.$medium ? '20%' : '15%'};
  background-color: #3CB371;
  border-radius: 50% 0 50% 50%;
  position: absolute;
  bottom: ${props => props.$big ? '30%' : props.$medium ? '45%' : '40%'};
  left: ${props => props.$big ? '25%' : props.$medium ? '40%' : '15%'};
  transform: rotate(${props => props.$rotate || '0'});
`;