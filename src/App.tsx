// src/App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "./i18n"; // Import the i18n configuration
import Navbar from "./components/navbar/Navbar";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <Box textAlign="center" fontSize="xl" p={4}>
        <h1>{t("mainSection.title")}</h1>
      </Box>
    </>
  );
};

export default App;
