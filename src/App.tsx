// src/App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "./i18n";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/sections/Hero";
import AboutSection from "./components/sections/About";
import WhoWeAreSection from "./components/sections/WhoWeAre";
import ServiceSection from "./components/sections/Services";
import TechStackSection from "./components/sections/TechStack";
import OurWorkSection from "./components/sections/OurWork";
import OurBlogSection from "./components/sections/OurBlog";
import ContactFormSection from "./components/sections/ContactForm";
import CollaborateSection from "./components/sections/Collaborate";

const App: React.FC = () => {
  return (
    <Box minWidth={"100vw"}>
      <Navbar />
      <HeroSection />
      <Box paddingX={8}>
        <TechStackSection />
        <AboutSection />
        <WhoWeAreSection />
        <ServiceSection />
        <OurWorkSection />
        <OurBlogSection />
        <ContactFormSection />
      </Box>
      <CollaborateSection />
    </Box>
  );
};

export default App;
