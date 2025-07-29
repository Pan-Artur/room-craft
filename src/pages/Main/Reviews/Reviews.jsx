import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import {
  Section,
  Title,
  ReviewsGrid,
  ReviewCard,
  ReviewText,
  ReviewAuthor,
  AuthorInfo,
} from "./styles/Reviews.styled";

const reviews = [
  { author: "Анна, 19 років", text: "За 10 хвилин створила ідеальну кімнату!" },
  { author: "Максим, дизайнер", text: "Користуюсь для швидких ескізів клієнтам." },
  { author: "Олег, 32 роки", text: "Дуже інтуїтивно, нічого зайвого." },
  { author: "Ірина, мама двох дітей", text: "Зручно планувати дитячу кімнату перед ремонтом." },
  { author: "Сергій, рієлтор", text: "Іноді показую клієнтам, як може виглядати простір." },
  { author: "Юлія, студентка", text: "Просто кайф. Легко і без реєстрації." },
];

export const Reviews = () => (
  <Section>
    <Title>Що говорять наші користувачі</Title>
    <ReviewsGrid>
      {reviews.map(({ author, text }, i) => (
        <ReviewCard key={i}>
          <ReviewText>“{text}”</ReviewText>
          <AuthorInfo>
            <FaUserCircle className="author-icon" />
            <ReviewAuthor>{author}</ReviewAuthor>
          </AuthorInfo>
        </ReviewCard>
      ))}
    </ReviewsGrid>
  </Section>
);
