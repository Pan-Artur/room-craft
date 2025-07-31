import styled from 'styled-components';

export const BuilderContainer = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  
  > *:first-child {
    flex: 0 0 250px;
  }
  
  > *:nth-child(2) {
    flex: 1;
    margin: 0 20px;
    height: 100%;
  }
  
  > *:last-child {
    flex: 0 0 250px;
  }
`;