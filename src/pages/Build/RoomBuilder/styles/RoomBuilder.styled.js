import styled from 'styled-components';

export const BuilderContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  
  > * {
    flex: 1;
  }
  
  > *:nth-child(2) {
    flex: 1.5;
  }
`;