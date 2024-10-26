import { createContext } from "react";

type Language = "en" | "ar";
type LanguageContextProps = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export default LanguageContext;
