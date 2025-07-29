import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  QuestionWrapper,
  QuestionHeader,
  QuestionTitle,
  QuestionContent,
  ToggleIcon,
} from "./styles/FAQ.styled";

export const Question = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <QuestionWrapper>
      <QuestionHeader onClick={() => setIsOpen(!isOpen)}>
        <QuestionTitle>{title}</QuestionTitle>
        <ToggleIcon isOpen={isOpen}>
          <IoIosArrowDown size={24} />
        </ToggleIcon>
      </QuestionHeader>

      <QuestionContent
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 300ms ease",
          opacity: isOpen ? 1 : 0,
          paddingTop: isOpen ? "16px" : "0",
        }}
      >
        {children}
      </QuestionContent>
    </QuestionWrapper>
  );
};
