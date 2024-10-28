import React from "react";
import { Button, useTheme, useBreakpointValue } from "@chakra-ui/react";

type NavbarLinkProps = {
  sectionId: string;
  isActive: boolean;
  children: React.ReactNode;
};

const NavbarLink = ({ sectionId, isActive, children }: NavbarLinkProps) => {
  const theme = useTheme();
  const buttonPadding = useBreakpointValue({ base: 2, md: 3 });

  const handleClick = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      variant="link"
      color={isActive ? theme.colors.white[100] : theme.colors.white[500]} // Change to primary when active
      padding={buttonPadding}
      borderRadius={20}
      fontWeight={isActive ? "bold" : "normal"}
      borderWidth={"2px"}
      borderColor={isActive ? theme.colors.primary[500] : "transparent"}
      _hover={{
        borderColor: theme.colors.primary[500], // Hover color from primary
      }}
      _active={{
        borderColor: theme.colors.primary[600], // Active color slightly darker
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default NavbarLink;
