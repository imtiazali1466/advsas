import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, Box, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaRegClipboard,
  FaCloud,
} from "react-icons/fa";
import theme from "@/theme";
import "./ServiceSection.css"; // Import the CSS file for animations

const ServiceSection: React.FC = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false); // State to trigger animation

  const services = [
    {
      title: t("service.cards.card_1.title"),
      subtitle: t("service.cards.card_1.subtitle"),
      icon: FaBrain,
    },
    {
      title: t("service.cards.card_2.title"),
      subtitle: t("service.cards.card_2.subtitle"),
      icon: FaDatabase,
    },
    {
      title: t("service.cards.card_3.title"),
      subtitle: t("service.cards.card_3.subtitle"),
      icon: FaCode,
    },
    {
      title: t("service.cards.card_4.title"),
      subtitle: t("service.cards.card_4.subtitle"),
      icon: FaRegClipboard,
    },
    {
      title: t("service.cards.card_5.title"),
      subtitle: t("service.cards.card_5.subtitle"),
      icon: FaCloud,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after 100ms
    }, 100);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

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
        mb={5}
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

      <Flex wrap="wrap" justifyContent="center" maxW="1200px" width="100%">
        {services.map((service, index) => (
          <Box
            key={index}
            className={`service-box ${animate ? "animate" : ""}`} // Add the animate class
            borderWidth={1}
            borderRadius="lg"
            boxShadow="xl"
            bg={theme.colors.lavender[500]}
            py={10}
            px={5}
            mx={2}
            my={4}
            minWidth="250px"
            width="30%"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "2xl",
            }}
            cursor={"pointer"}
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={service.icon}
                boxSize={16}
                color={theme.colors.primary[600]}
                mb={4}
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
