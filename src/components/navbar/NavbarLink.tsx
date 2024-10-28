import React from "react";
import { Button } from "@chakra-ui/react";

type NavbarLinkProps = {
  sectionId: string;
  isActive: boolean;
  children: React.ReactNode;
};

const NavbarLink = ({ sectionId, isActive, children }: NavbarLinkProps) => {
  const handleClick = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      variant="link"
      color={isActive ? "primary" : "text"}
      fontWeight={isActive ? "bold" : "normal"}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default NavbarLink;
