import React from "react";
import { Flex, Heading, Text, Box, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaRegClipboard,
  FaCloud,
} from "react-icons/fa"; // Import relevant icons
import theme from "@/theme";

const ServiceSection: React.FC = () => {
  const { t } = useTranslation();

  // Service card data
  const services = [
    {
      title: t("service.cards.card_1.title"),
      subtitle: t("service.cards.card_1.subtitle"),
      icon: FaBrain, // Icon for the first card
    },
    {
      title: t("service.cards.card_2.title"),
      subtitle: t("service.cards.card_2.subtitle"),
      icon: FaDatabase, // Icon for the second card
    },
    {
      title: t("service.cards.card_3.title"),
      subtitle: t("service.cards.card_3.subtitle"),
      icon: FaCode, // Icon for the third card
    },
    {
      title: t("service.cards.card_4.title"),
      subtitle: t("service.cards.card_4.subtitle"),
      icon: FaRegClipboard, // Icon for the fourth card
    },
    {
      title: t("service.cards.card_5.title"),
      subtitle: t("service.cards.card_5.subtitle"),
      icon: FaCloud, // Icon for the fifth card
    },
  ];

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      p={{ base: 4, md: 8 }}
      marginY={{ base: 4, md: 8 }}
    >
      <Heading
        as="h2"
        fontSize={{ base: "md", md: "sm" }}
        fontWeight={600}
        textAlign="center"
        mb={5} // Add margin below the heading
      >
        {t("service.title")}
      </Heading>

      <Text
        fontSize={{ base: "md", md: "5xl" }}
        maxWidth="7xl"
        textAlign="center"
        color="secondary.500"
        fontWeight={600}
        marginY={20}
      >
        {t("service.at")}{" "}
        <strong style={{ color: theme.colors.primary[500] }}>
          {t("service.company_name")}
        </strong>
        {t("service.subtitle")}
      </Text>

      <Flex
        wrap="wrap" // Allow cards to wrap to the next line
        justifyContent="center" // Center the cards
        maxW="1200px" // Limit the maximum width of the grid
        width="100%"
      >
        {services.map((service, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="xl" // Enhanced box shadow
            bg={theme.colors.lavender[500]} // Card background color
            py={10}
            px={5}
            width="380px" // Fixed width for each card
            mx={2} // Add horizontal margin for spacing
            my={4} // Vertical margin for spacing
            minWidth="380px" // Ensure the card does not shrink below 380px
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={service.icon} // Use the icon defined in each service
                boxSize={16} // Adjust icon size
                color={theme.colors.primary[600]} // Set icon color for contrast
                mb={4} // Margin bottom for spacing
              />
              <Heading
                as="h3"
                size="lg"
                fontWeight={700}
                color="white"
                textAlign="center"
              >
                {service.title}
              </Heading>
              <Text mt={2} color="gray.200" textAlign="center" fontSize={16}>
                {service.subtitle}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default ServiceSection;
