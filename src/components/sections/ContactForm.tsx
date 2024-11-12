import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
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
import { useTranslation } from "react-i18next";

const ContactFormSection: React.FC = () => {
  const { t } = useTranslation(); // Use the translation function
  const [state, handleSubmit] = useForm("mzzbggaw");

  // State to manage phone input
  const [phone, setPhone] = useState<string>("");

  // State to manage form fields
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // State to manage success message
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handle the form submit and include the phone number in the data
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e)
      .then(() => {
        setSubmitted(true); // Show success message
        // Reset the form fields after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setPhone(""); // Reset phone input as well
      })
      .catch((error) => {
        console.error("Error submitting form: ", error);
      });
  };

  // Reset the form for a new submission
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setPhone(""); // Reset phone input as well
    setSubmitted(false); // Hide success message
  };

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

        <Heading as="h3" size="lg" fontSize={{ base: "3xl", md: "5xl" }} mb={2}>
          {t("contactForm.pageTitle")}
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} color={"gray.500"} mb={6}>
          {t("contactForm.subtitle")}
        </Text>

        {submitted ? (
          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={4}>
              {t("contactForm.successMessage")} {/* Example success message */}
            </Heading>
            <Text mb={6}>
              {t("contactForm.thankYouMessage")}{" "}
              {/* Example thank you message */}
            </Text>
            <Button colorScheme="blue" onClick={resetForm}>
              {t("contactForm.sendAnotherMessage")}{" "}
              {/* Optionally translate this */}
            </Button>
          </Box>
        ) : (
          <VStack spacing={4} align="stretch" width="100%" maxWidth="500px">
            <form onSubmit={handleFormSubmit}>
              {/* Row 1: First Name and Last Name */}
              <HStack spacing={4}>
                <Box width="100%">
                  <label>{t("contactForm.firstNameLabel")}</label>
                  <Input
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t("contactForm.firstNamePlaceholder")}
                    borderColor="gray.300"
                    focusBorderColor="accent.400"
                    required
                  />
                </Box>
                <Box width="100%">
                  <label>{t("contactForm.lastNameLabel")}</label>
                  <Input
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contactForm.emailPlaceholder")}
                  borderColor="gray.300"
                  focusBorderColor="accent.400"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Box>

              {/* Row 3: Phone Number */}
              <Box width="100%">
                <label>{t("contactForm.phoneLabel")}</label>
                <PhoneInput
                  value={phone} // Set the value to the phone state
                  onChange={(value: string) => setPhone(value)} // Update phone state on change
                  country="sa"
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
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contactForm.messagePlaceholder")}
                  borderColor="gray.300"
                  focusBorderColor="accent.400"
                  rows={7}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
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
              <Button
                type="submit"
                colorScheme="primary"
                width="full"
                size="lg"
                isLoading={state.submitting}
              >
                {t("contactForm.submit")}
              </Button>
            </form>
          </VStack>
        )}
      </Grid>
    </Box>
  );
};

export default ContactFormSection;
