import styled from 'styled-components';

export const SpaceBed = () => {
  return (
    <BedContainer>
      <Galaxy>
        <Star small />
        <Star medium />
        <Star large />
        <Planet />
      </Galaxy>
      <Spaceship />
    </BedContainer>
  );
};

const BedContainer = styled.div`
  width: 180px;
  height: 120px;
  position: relative;
  background-color: #0D47A1;
  border-radius: 10px;
`;

const Galaxy = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Star = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  ${props => {
    if (props.small) return 'width: 1px; height: 1px; top: 30px; left: 40px;';
    if (props.medium) return 'width: 2px; height: 2px; top: 70px; left: 120px;';
    return 'width: 3px; height: 3px; top: 20px; left: 100px;';
  }}
`;

const Planet = styled.div`
  width: 30px;
  height: 30px;
  background-color: #FFAB91;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 30px;
`;

const Spaceship = styled.div`
  width: 40px;
  height: 20px;
  background-color: #BDBDBD;
  border-radius: 10px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFD54F;
    border-radius: 50%;
    right: -5px;
    top: 5px;
  }
`;
