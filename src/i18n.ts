import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./components/locales/en/translation.json";
import arTranslation from "./components/locales/ar/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    lng: "en", // Default language
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
  });

export default i18n;
