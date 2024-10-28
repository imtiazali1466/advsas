import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  VStack,
  Collapse,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavbarLink from "./NavbarLink";
import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import theme from "@/theme";

const sections = ["home", "about", "services", "projects", "blog"];

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const activeSection = useScrollSpy(sections);
  const { isOpen, onToggle } = useDisclosure();

  // Set 'home' as the active section by default if no section is active
  const currentActiveSection = activeSection || "home";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const buttonPadding = useBreakpointValue({ base: 2, md: 3 });

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      width="100%"
      bg="white.900" // Dark background color
      py={4}
      zIndex="1000"
      boxShadow="lg"
    >
      <Flex justify="space-between" align="center" px={6}>
        {/* Logo */}
        <Box>
          <Image
            src="/navbar_logo.png"
            alt={t("navbar.logoAlt")}
            borderRadius="full"
          />
        </Box>

        {/* Hamburger Icon for mobile */}
        <IconButton
          aria-label="Toggle Navigation"
          icon={
            isOpen ? (
              <CloseIcon color="white" />
            ) : (
              <HamburgerIcon color="white" />
            )
          }
          onClick={onToggle}
          display={{ md: "none" }}
          variant="ghost" // Transparent button for better aesthetics
        />

        {/* Navigation Links */}
        <HStack
          gap={8}
          display={{ base: "none", md: "flex" }}
          justify="center"
          bg="navbar" // Adjust to match your theme
          padding={4}
          borderRadius={40}
        >
          {sections.map((section) => (
            <NavbarLink
              key={section}
              sectionId={section}
              isActive={currentActiveSection === section}
            >
              {t(`navbar.${section}`)}
            </NavbarLink>
          ))}
          <Button
            variant="link"
            color={"text"} // Change to primary when active
            padding={buttonPadding}
            borderRadius={20}
            fontWeight={"bold"}
            borderWidth={"2px"}
            background={theme.colors.white[100]}
            borderColor={theme.colors.white[100]}
            textTransform={"uppercase"}
            _hover={{
              borderColor: theme.colors.white[100], // Hover color from primary
            }}
          >
            {t(`navbar.book`)}
          </Button>
          {/* Language Selection and Social Icons for Desktop */}
        </HStack>

        <HStack spacing={4}>
          <Menu>
            <MenuButton as={Button} variant="outline" colorScheme="teal">
              {i18n.language === "en" ? "English" : "Arabic"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage("ar")}>Arabic</MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter color="text" />}
            target="_blank"
            variant="link"
          />
          <IconButton
            as="a"
            href="https://instagram.com"
            aria-label="Instagram"
            icon={<FaInstagram color="text" />}
            target="_blank"
            variant="link"
          />
          <IconButton
            as="a"
            href="https://github.com"
            aria-label="GitHub"
            icon={<FaGithub color="text" />}
            target="_blank"
            variant="link"
          />
        </HStack>
      </Flex>

      {/* Mobile Navigation Links */}
      <Collapse in={isOpen}>
        <VStack spacing={4} align="start" mt={4} p={6} bg="navbar">
          {sections.map((section) => (
            <NavbarLink
              key={section}
              sectionId={section}
              isActive={currentActiveSection === section}
            >
              {t(`navbar.${section}`)}
            </NavbarLink>
          ))}

          {/* Language Selection and Social Icons moved to the collapsed menu */}
          <HStack spacing={4} mt={4}>
            <Menu>
              <MenuButton as={Button} variant="outline" colorScheme="teal">
                {i18n.language === "en" ? "English" : "Arabic"}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => changeLanguage("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("ar")}>Arabic</MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              as="a"
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter color="text" />}
              target="_blank"
              variant="link"
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram color="text" />}
              target="_blank"
              variant="link"
            />
            <IconButton
              as="a"
              href="https://github.com"
              aria-label="GitHub"
              icon={<FaGithub color="text" />}
              target="_blank"
              variant="link"
            />
          </HStack>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
