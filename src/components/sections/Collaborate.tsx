import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import linePattern from "/public/line_pattern.png"; // Adjust path as necessary

const CollaborateSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      position="relative"
      bg="text"
      bgImage={`url(${linePattern})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgBlendMode="overlay"
      p={{ base: 4, md: 8 }}
      py={{ base: 16, md: 20 }}
      textAlign="center"
      color="white"
      minHeight={{ base: 400, md: 500 }}
    >
      {/* Main Content */}
      <Flex
        gap={4}
        position="relative"
        alignItems="center"
        flexDir="column"
        justifyContent="center"
        minHeight={{ base: "400px", md: "500px" }}
      >
        <Heading fontSize={{ base: "2xl", md: "4xl" }} maxW="3xl">
          {t("collaborate.title")}
        </Heading>

        <Button
          colorScheme="whiteAlpha"
          color="secondary.900"
          bg="white"
          _hover={{ bg: "gray.100" }}
          size={{ base: "md", md: "lg" }}
        >
          {t("collaborate.buttonText")}
        </Button>
      </Flex>
    </Box>
  );
};

export default CollaborateSection;
