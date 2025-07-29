import { FAQSection, Title, Accordion } from "./styles/FAQ.styled";
import { Question } from "./Question";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation();

  const questions = [
    {
      title: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      title: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      title: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      title: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      title: t("faq.question5"),
      answer: t("faq.answer5"),
    },
    {
      title: t("faq.question6"),
      answer: t("faq.answer6"),
    },
    {
      title: t("faq.question7"),
      answer: t("faq.answer7"),
    },
    {
      title: t("faq.question8"),
      answer: t("faq.answer8"),
    },
  ];

  return (
    <FAQSection id="faq">
      <Title>{t("faq.title")}</Title>
      <Accordion>
        {questions.map((q, i) => (
          <Question key={i} title={q.title}>
            {q.answer}
          </Question>
        ))}
      </Accordion>
    </FAQSection>
  );
};
