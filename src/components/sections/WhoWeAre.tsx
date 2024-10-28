// WhoWeAreSection.tsx
import React from "react";
import { Text, Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import StillHaveQuestionsComponent from "./components/StillHaveQuestions";

const WhoWeAreSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Flex
        gap={2}
        p={{ base: 3, md: 6 }}
        textAlign="center"
        width="100%"
        marginY={{ base: 4, md: 8 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "3xl" }} // Adjusted for small screens
          fontWeight={800}
          lineHeight={10}
        >
          {t("who_we_are.title")}
        </Heading>
        <Text
          fontWeight={500}
          maxW="8xl"
          fontSize={{ base: "md", md: "2xl" }} // Adjusted for small screens
          color={"black.600"}
        >
          {t("who_we_are.description")}
          <Text as="span" fontWeight={700}>
            {t("who_we_are.bold_parts")}
          </Text>
          {t("who_we_are.additional_description")}
          <Text as="span" fontWeight={700}>
            {t("who_we_are.awrag")}
          </Text>
          {t("who_we_are.and")}{" "}
          {/* Assuming you have an 'and' key in the translations */}
          <Text as="span" fontWeight={700}>
            {t("who_we_are.token")}
          </Text>
          {t("who_we_are.final_description")}
        </Text>
      </Flex>
      <StillHaveQuestionsComponent />
    </>
  );
};

export default WhoWeAreSection;
