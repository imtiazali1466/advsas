import React from "react";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      backgroundImage="url('/hero.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      width="100%"
      px={{ base: 4, md: 8 }}
    >
      <VStack
        spacing={{ base: 4, md: 6 }}
        p={{ base: 3, md: 6 }}
        borderRadius="md"
        alignItems={"center"} // Align items based on language direction
      >
        <Text
          fontSize={{ base: "md", md: "xl" }}
          lineHeight={{ base: "short", md: "shorter" }}
          maxW={{ base: "100%", md: "3xl" }}
        >
          {t("hero.subtitle")}
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
          lineHeight={{ base: "2.5rem", md: "4rem", lg: "4.5rem" }}
          maxW={{ base: "100%", md: "3xl" }}
          bgGradient="linear(to-r, #FFFFFF, #9796F0)"
          bgClip="text"
        >
          {t("hero.title")}
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          lineHeight={{ base: "tall", md: "taller" }}
          maxW={{ base: "100%", md: "8xl" }}
          textAlign="justify"
        >
          {t("hero.description")}
        </Text>

        <HStack spacing={4} pt={4} direction={isArabic ? "row-reverse" : "row"}>
          <Button
            bg="accent.400" // Adjusted to a blue color scheme
            color="white"
            _hover={{ bg: "blue.500" }}
            rightIcon={
              <ArrowForwardIcon
                transform={isArabic ? "rotate(-135deg)" : "rotate(-45deg)"}
              />
            }
          >
            {t("buttons.getStarted")}
          </Button>
          <Button
            bg="accent.400" // Adjusted to a blue color scheme
            color="white"
            _hover={{ bg: "blue.500" }}
            rightIcon={
              <ArrowForwardIcon
                transform={isArabic ? "rotate(-135deg)" : "rotate(-45deg)"}
              />
            }
          >
            {t("buttons.letsExplore")}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroSection;
