import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  background-color: #eef7f6;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #4db6ac;
    margin: 12px auto 0;
    border-radius: 2px;
  }
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
`;

export const StepCard = styled.div`
  background: white;
  padding: 32px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 16px;
  background-color: #4db6ac;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;
