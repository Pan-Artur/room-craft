import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  Section,
  Title,
  ReviewsGrid,
  ReviewCard,
  ReviewText,
  ReviewAuthor,
  AuthorInfo,
} from "./styles/Reviews.styled";
import { useTranslation } from "react-i18next";

export const Reviews = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      author: t("reviews.author1"),
      text: t("reviews.text1"),
    },
    {
      author: t("reviews.author2"),
      text: t("reviews.text2"),
    },
    { author: t("reviews.author3"), text: t("reviews.text3") },
    {
      author: t("reviews.author4"),
      text: t("reviews.text4"),
    },
    {
      author: t("reviews.author5"),
      text: t("reviews.text5"),
    },
    { author: t("reviews.author6"), text: t("reviews.text6") },
  ];

  return (
    <Section id="reviews">
      <Title>{t("reviews.title")}</Title>
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
};
