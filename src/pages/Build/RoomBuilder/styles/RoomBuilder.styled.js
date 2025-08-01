import styled from 'styled-components';

export const BuilderContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  
  > *:first-child {
    flex: 0 0 250px;
  }
  
  > *:nth-child(2) {
    flex: 0 0 600px;
    margin: 0 15px 0 0;
    height: 100%;
  }
  
  > *:last-child {
    flex: 0 0 250px;
  }
`;