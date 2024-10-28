// src/components/navbar/Navbar.tsx
import React from "react";
import {
  Box,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import NavbarLink from "./NavbarLink";
import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sections = ["hero", "about", "services", "contact"];

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const activeSection = useScrollSpy(sections);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      width="100%"
      bg="white"
      py={4}
      zIndex="1000"
    >
      <HStack spacing={8} justify="center">
        {sections.map((section) => (
          <NavbarLink
            key={section}
            sectionId={section}
            isActive={activeSection === section}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </NavbarLink>
        ))}

        <Menu>
          <MenuButton as={Button}>
            {i18n.language === "en" ? "English" : "Arabic"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage("ar")}>Arabic</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Navbar;
