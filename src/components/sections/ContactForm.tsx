import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  VStack,
  Checkbox,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles for the phone input

const ContactFormSection: React.FC = () => {
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
          {t("contactForm.sectionName")}
        </Heading>
        {/* Page Title */}
        <Heading as="h3" size="lg" fontSize={{ base: "3xl", md: "5xl" }} mb={2}>
          {t("contactForm.pageTitle")}
        </Heading>

        {/* Subtitle */}
        <Text fontSize={{ base: "md", md: "lg" }} color={"gray.500"} mb={6}>
          {t("contactForm.subtitle")}
        </Text>

        {/* Contact Form */}
        <VStack spacing={4} align="stretch" width="100%" maxWidth="500px">
          {/* Row 1: First Name and Last Name */}
          <HStack spacing={4}>
            <Box width="100%">
              <label>{t("contactForm.firstNameLabel")}</label>
              <Input
                placeholder={t("contactForm.firstNamePlaceholder")}
                borderColor="gray.300"
                focusBorderColor="accent.400"
                required
              />
            </Box>
            <Box width="100%">
              <label>{t("contactForm.lastNameLabel")}</label>
              <Input
                placeholder={t("contactForm.lastNamePlaceholder")}
                borderColor="gray.300"
                focusBorderColor="accent.400"
                required
              />
            </Box>
          </HStack>

          {/* Row 2: Email */}
          <Box width="100%">
            <label>{t("contactForm.emailLabel")}</label>
            <Input
              placeholder={t("contactForm.emailPlaceholder")}
              borderColor="gray.300"
              focusBorderColor="accent.400"
              required
            />
          </Box>

          {/* Row 3: Phone Number with Country Code */}
          <Box width="100%">
            <label>{t("contactForm.phoneLabel")}</label>
            <PhoneInput
              country={"us"} // Default country
              placeholder={t("contactForm.phonePlaceholder")}
              inputStyle={{
                borderColor: "gray.300",
                width: "100%",
                height: "48px",
              }}
              buttonStyle={{
                backgroundColor: "transparent",
                borderColor: "gray.300",
              }}
            />
          </Box>

          {/* Row 4: Message */}
          <Box width="100%">
            <label>{t("contactForm.messageLabel")}</label>
            <Textarea
              placeholder={t("contactForm.messagePlaceholder")}
              borderColor="gray.300"
              focusBorderColor="accent.400"
              rows={7}
              required
            />
          </Box>

          {/* Row 5: Privacy Policy Checkbox */}
          <HStack spacing={2}>
            <Checkbox required>{t("contactForm.agreePrivacy")}</Checkbox>
            <Text fontSize="sm">
              <Text
                as="span"
                color="accent.400"
                textDecoration="underline"
                cursor={"pointer"}
              >
                {t("contactForm.privacyPolicy")}
              </Text>
            </Text>
          </HStack>

          {/* Row 6: Submit Button */}
          <Button colorScheme="primary" width="full" size="lg">
            {t("contactForm.submit")}
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ContactFormSection;
