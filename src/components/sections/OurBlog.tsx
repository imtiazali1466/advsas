import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  Link,
  VStack,
  Grid,
} from "@chakra-ui/react";

const OurBlogSection: React.FC = () => {
  const { t } = useTranslation(); // Use the translation function

  return (
    <Box p={8} py={40}>
      <Grid templateColumns="1fr" placeItems="center" gap={6}>
        <Heading
          as="h2"
          mb={4}
          fontSize={{ base: "20px", md: "16px" }}
          color={"accent.400"}
        >
          {t("ourBlog.sectionName")}
        </Heading>

        {/* Page Title */}
        <Heading as="h3" size="lg" fontSize={{ base: "3xl", md: "5xl" }} mb={2}>
          {t("ourBlog.pageTitle")} {/* Page Title */}
        </Heading>

        {/* Subtitle */}
        <Text fontSize={{ base: "md", md: "lg" }} color={"gray.500"} mb={6}>
          {t("ourBlog.subtitle")} {/* Subtitle */}
        </Text>

        {/* Email Input and Subscribe Button */}
        <VStack spacing={2} align="stretch" width="100%" maxWidth="500px">
          <HStack spacing={2} justifyContent="center" width="100%">
            <Input
              placeholder={t("ourBlog.emailPlaceholder")} // Email placeholder
              borderColor="gray.300"
              focusBorderColor="accent.400"
              size={{ base: "md", md: "lg" }} // Responsive size for input
            />
            <Button
              colorScheme="primary"
              size={{ base: "md", md: "lg" }}
              height={{ base: "md", md: "auto" }} // Smaller height for mobile
            >
              {t("ourBlog.subscribe")} {/* Subscribe Button Text */}
            </Button>
          </HStack>

          {/* Privacy notice aligned with input */}
          <Text fontSize="sm" color="gray.500" textAlign="left">
            {t("ourBlog.dataNotice")} {/* Data notice text */}
            <Link
              color="accent.400"
              textDecoration="underline"
              href="/privacy-policy"
            >
              {t("ourBlog.privacyPolicy")} {/* Privacy Policy link text */}
            </Link>
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default OurBlogSection;
