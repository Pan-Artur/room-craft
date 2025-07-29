import styled from 'styled-components';

export const SkeletonChair = () => {
  return (
    <ChairContainer>
      <ChairOutline />
      <ChairSupport />
      <ChairSupport horizontal />
    </ChairContainer>
  );
};

const ChairContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const ChairOutline = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid #212121;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ChairSupport = styled.div`
  position: absolute;
  width: ${props => props.horizontal ? '74px' : '3px'};
  height: ${props => props.horizontal ? '3px' : '74px'};
  background-color: #212121;
  top: ${props => props.horizontal ? '50%' : '13px'};
  left: ${props => props.horizontal ? '13px' : '50%'};
  transform: translate(-50%, -50%);
`;
