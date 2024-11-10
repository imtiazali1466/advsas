import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import theme from "./theme"; // Import your custom theme
import "./i18n"; // Import your i18n configuration
import { useTranslation } from "react-i18next";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// eslint-disable-next-line react-refresh/only-export-components
const AppWrapper = () => {
  const { i18n } = useTranslation();

  const [isRTL, setIsRTL] = useState(i18n.language === "ar");

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      console.log("Language changed to:", lng); // Debugging language change
      setIsRTL(lng === "ar"); // Check if the language is Arabic (RTL)
    };

    // Force set html direction
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    handleLanguageChange(i18n.language);

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, isRTL]); 

  const customTheme = {
    ...theme, 
    direction: isRTL ? "rtl" : "ltr", 
  };

  return (
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  );
};

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
