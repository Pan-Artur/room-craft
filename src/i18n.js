import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ua from "./locales/ua/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: "ua",
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
