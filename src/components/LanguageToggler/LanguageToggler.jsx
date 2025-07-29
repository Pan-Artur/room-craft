import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  LanguageSelectorWrapper,
  LangButton,
  LangDropdown,
  LangOption,
  LangButtonContent,
} from "./styles/LanguageToggler.styled";

export const LanguageToggler = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <LanguageSelectorWrapper>
      <LangButton onClick={() => setOpen(!open)}>
        <LangButtonContent>
          {t("header.language")} <FiChevronDown />
        </LangButtonContent>
      </LangButton>
      <LangDropdown open={open}>
        <LangOption onClick={() => changeLanguage("ua")}>UA</LangOption>
        <LangOption onClick={() => changeLanguage("en")}>EN</LangOption>
      </LangDropdown>
    </LanguageSelectorWrapper>
  );
};