import styled from "styled-components";

export const FAQSection = styled.section`
  background: #f5f5f5;
  padding: 80px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #2f2f2f;
  font-weight: 700;
`;

export const Accordion = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuestionWrapper = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  padding: 20px 24px;
  text-align: left;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionTitle = styled.h3`
  font-size: 20px;
  color: #333333;
  font-weight: 600;
  margin: 0;
`;

export const ToggleIcon = styled.span`
  font-size: 24px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
  color: #4db6ac;
`;

export const QuestionContent = styled.div`
  font-size: 16px;
  color: #555555;
  line-height: 24px;
  will-change: height, opacity;
`;
