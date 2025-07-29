import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  background-color: #fef9f3;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: #f4a261;
    margin: 12px auto 0;
    border-radius: 2px;
  }
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ReviewCard = styled.div`
  background: #fff;
  padding: 28px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(240, 177, 122, 0.1);
  text-align: left;
  transition: transform 250ms ease, box-shadow 250ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(240, 177, 122, 0.2);
  }
`;

export const ReviewText = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .author-icon {
    color: #f4a261;
    font-size: 24px;
    flex-shrink: 0;
  }
`;

export const ReviewAuthor = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  font-style: italic;
`;
