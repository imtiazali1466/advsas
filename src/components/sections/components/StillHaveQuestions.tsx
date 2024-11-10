// StillHaveQuestionsComponent.tsx
import React from "react";
import {
  Text,
  Flex,
  Heading,
  Button,
  Image,
  ScaleFade,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ArrowForwardIcon } from "@chakra-ui/icons"; // Import the ArrowForwardIcon

const StillHaveQuestionsComponent: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = false; // Change this condition based on your app's language state

  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Flex
        direction="column" // Column layout for small screens
        alignItems="center"
        justifyContent="center"
        p={{ base: 3, md: 6 }}
        gap={6}
        marginY={{ base: 4, md: 8 }}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        bg="black.100"
        minH={400}
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-2px)",
          transition: "0.2s ease-in-out",
        }} // Interaction on hover
      >
        <Image
          src="/question_avatar.png"
          alt="Question Avatar"
          objectFit="cover"
          borderRadius="md" // Rounded corners for the image
          boxShadow="md"
        />
        <Flex direction="column" textAlign="center" alignItems="center">
          <Heading
            as="h3"
            fontSize={{ base: "lg", md: "3xl" }}
            fontWeight={800}
            color="black.900"
          >
            {t("still_have_question.title")}
          </Heading>
          <Text
            fontWeight={600}
            maxW="2xl"
            fontSize={{ base: "md", md: "xl" }}
            color="black.600"
            mb={4}
            transition="color 0.2s"
            _hover={{ color: "black.500" }}
          >
            {t("still_have_question.subtitle")}
          </Text>
          <Button
            as="a"
            href="mailto:support@advsas.sa"
            size="lg"
            bg="secondary.400"
            color={"black.100"}
            rightIcon={
              <ArrowForwardIcon
                transform={isArabic ? "rotate(-135deg)" : "rotate(-45deg)"}
              />
            }
            _hover={{
              transform: "scale(1.05)",
              transition: "0.2s ease-in-out",
            }} // Button hover effect
          >
            {t("still_have_question.button")}
          </Button>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};

export default StillHaveQuestionsComponent;
