import React from "react";
import { Button, useTheme, useBreakpointValue } from "@chakra-ui/react";

type NavbarLinkProps = {
  sectionId: string;
  isActive: boolean;
  children: React.ReactNode;
  fontSize?: string | number; // Make fontSize optional with type string or number
};

const NavbarLink = ({
  sectionId,
  isActive,
  children,
  fontSize,
}: NavbarLinkProps) => {
  const theme = useTheme();
  const buttonPadding = useBreakpointValue({ base: 2, md: 3 });
  const borderRadius = useBreakpointValue({ base: "md", md: "lg" });
  const borderWidth = useBreakpointValue({ base: "1px", md: "2px" });

  const handleClick = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      variant="link"
      color={isActive ? theme.colors.white[100] : theme.colors.white[500]}
      padding={buttonPadding}
      borderRadius={borderRadius}
      fontWeight={isActive ? "bold" : "normal"}
      fontSize={fontSize} // Apply the fontSize prop here
      borderWidth={borderWidth}
      borderColor={isActive ? theme.colors.primary[500] : "transparent"}
      _hover={{
        borderColor: theme.colors.primary[500],
      }}
      _active={{
        borderColor: theme.colors.primary[600],
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default NavbarLink;
