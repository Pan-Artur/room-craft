import styled from 'styled-components';

export const BuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 60px); /* Віднімаємо висоту header/footer */
  padding: 15px;
  gap: 15px;
  box-sizing: border-box;

  > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
    gap: 20px;
    min-height: calc(100vh - 80px);

    > *:first-child {
      flex: 0 0 200px;
      height: calc(100vh - 120px);
      overflow-y: auto;
    }
    
    > *:nth-child(2) {
      flex: 1 1 400px;
      margin: 0;
      min-height: 500px;
    }
    
    > *:last-child {
      flex: 0 0 200px;
      height: calc(100vh - 120px);
      overflow-y: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    flex-wrap: nowrap;
    min-height: calc(100vh - 100px);

    > *:first-child {
      flex: 0 0 250px;
      height: calc(100vh - 140px);
    }
    
    > *:nth-child(2) {
      flex: 0 0 600px;
      margin: 0 15px 0 0;
      min-height: 600px;
    }
    
    > *:last-child {
      flex: 0 0 250px;
      height: calc(100vh - 140px);
    }
  }
`;