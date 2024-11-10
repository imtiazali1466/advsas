import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  // Footer data extracted from JSON
  const footerData = {
    description:
      t("footer.description") ||
      "Design amazing digital experiences that create more happiness in the world.",
    links: {
      title: t("footer.links.title") || "Links",
      items: [
        { name: t("footer.links.home") || "Home", link: "home" },
        { name: t("footer.links.about_us") || "About Us", link: "about" },
        { name: t("footer.links.services") || "Services", link: "services" },
        { name: t("footer.links.project") || "Project", link: "projects" },
        { name: t("footer.links.contact") || "Contact", link: "contact" },
      ],
    },
    social: {
      title: t("footer.social.title") || "Social",
      items: [
        { name: t("footer.social.twitter") || "Twitter", link: "#" },
        { name: t("footer.social.linkedin") || "LinkedIn", link: "#" },
        { name: t("footer.social.facebook") || "Facebook", link: "#" },
        { name: t("footer.social.instagram") || "Instagram", link: "#" },
      ],
    },
    legal: {
      title: t("footer.legal.title") || "Legal",
      items: [
        { name: t("footer.legal.terms") || "Terms", link: "#" },
        { name: t("footer.legal.privacy") || "Privacy", link: "#" },
        { name: t("footer.legal.cookies") || "Cookies", link: "#" },
      ],
    },
  };

  // Smooth scroll function
  const handleScroll = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box py={8} px={{ base: 6, md: 40 }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        {/* Top Section: Description */}
        <Flex direction="column" gap={5}>
          <Image src="/navbar_logo.png" alt="Footer Logo" maxWidth={"80px"} />
          <Text
            fontSize={16}
            lineHeight="shorter"
            color="black.900"
            marginY="1rem"
            maxWidth={"sm"}
          >
            {footerData.description}
          </Text>
        </Flex>

        {/* Links Section */}
        <Grid
          gridTemplateColumns={{
            base: "1fr", // 1 column for mobile
            sm: "repeat(2, 1fr)", // 2 columns for small devices
            md: "repeat(3, 1fr)", // 3 columns for medium devices
            lg: "repeat(4, 1fr)", // 4 columns for large screens
          }}
          gap={8}
          width="100%"
        >
          {/* Links */}
          <Flex direction="column" gap={2}>
            <Heading as="h4" size="md" fontWeight="semibold">
              {footerData.links.title}
            </Heading>
            {footerData.links.items.map((item, index) => (
              <Link
                key={index}
                fontSize="sm"
                _hover={{ color: "blue.500", textDecoration: "underline" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.link);
                }}
                href={`#${item.link}`}
              >
                {item.name}
              </Link>
            ))}
          </Flex>

          {/* Social Links */}
          <Flex direction="column" gap={2}>
            <Heading as="h4" size="md" fontWeight="semibold">
              {footerData.social.title}
            </Heading>
            {footerData.social.items.map((item, index) => (
              <Link
                key={index}
                fontSize="sm"
                _hover={{ color: "blue.500", textDecoration: "underline" }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </Link>
            ))}
          </Flex>

          {/* Legal Links */}
          <Flex direction="column" gap={2}>
            <Heading as="h4" size="md" fontWeight="semibold">
              {footerData.legal.title}
            </Heading>
            {footerData.legal.items.map((item, index) => (
              <Link
                key={index}
                fontSize="sm"
                _hover={{ color: "blue.500", textDecoration: "underline" }}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </Flex>
        </Grid>
      </Grid>

      {/* Bottom Section: Social Media Icons */}
      <Flex justify="center" align="center" gap={6} mt={8}>
        <IconButton
          aria-label={t("footer.social.facebook") || "Facebook"}
          icon={<FaFacebook />}
          variant="link"
          color="white"
          fontSize="lg"
          _hover={{ color: "blue.500" }}
        />
        <IconButton
          aria-label={t("footer.social.linkedin") || "LinkedIn"}
          icon={<FaLinkedin />}
          variant="link"
          color="white"
          fontSize="lg"
          _hover={{ color: "blue.500" }}
        />
        <IconButton
          aria-label={t("footer.social.twitter") || "Twitter"}
          icon={<FaTwitter />}
          variant="link"
          color="white"
          fontSize="lg"
          _hover={{ color: "blue.500" }}
        />
      </Flex>

      {/* Credits */}
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={4}
        mt={4}
      >
        <Text fontSize="sm" color="gray.400" textAlign="center">
          {t("footer.credits") || "© 2024 ADVAS. All rights reserved."}
        </Text>
        <Flex gap={4} fontSize={{ base: "20px", md: "24px" }}>
          <Link href="#" aria-label="Facebook" isExternal>
            <FaFacebook color="grey.200" />
          </Link>
          <Link href="#" aria-label="LinkedIn" isExternal>
            <FaLinkedin color="grey.200" />
          </Link>
          <Link href="#" aria-label="Twitter" isExternal>
            <FaTwitter color="grey.200" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
