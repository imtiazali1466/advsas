// src/App.tsx
import React from "react";
import { Box, Heading, Button, VStack, Text } from "@chakra-ui/react";
import "./App.css";
import "./i18n"; // Import the i18n configuration
import { useTranslation } from "react-i18next";
import LanguageProvider from "./components/shared/LanguageProvider";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageProvider>
      <Box textAlign="center" fontSize="xl" p={4}>
        <VStack gap={4}>
          <Heading>{t("welcome")}</Heading>
          <Text>{t("description")}</Text>
          <Button
            onClick={() => changeLanguage("en")}
            colorScheme="blue"
            mr={2}
          >
            English
          </Button>
          <Button onClick={() => changeLanguage("es")} colorScheme="green">
            Español
          </Button>
        </VStack>
      </Box>
    </LanguageProvider>
  );
};

export default App;
