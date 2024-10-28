// AboutSection.tsx
import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex
      gap={2}
      p={{ base: 3, md: 6 }}
      textAlign="center"
      width={"100%"}
      marginY={{ base: 4, md: 8 }}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
        {t("about.welcome")}
      </Text>
      <Text fontWeight={500} maxW={"8xl"} fontSize={{ base: "lg", md: "2xl" }}>
        {t("about.description_part_1")}
        <Text as="span" fontWeight={700}>
          {t("about.bold_part")}
        </Text>
        {t("about.description_part_2")}
      </Text>
    </Flex>
  );
};

export default AboutSection;
