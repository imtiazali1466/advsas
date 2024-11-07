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
import ContactFormSection from "./components/sections/ContactForm";
import CollaborateSection from "./components/sections/Collaborate";
import Footer from "./components/sections/Footer";

const App: React.FC = () => {
  return (
    <Box minWidth="100vw">
      <Navbar />
      <HeroSection />
      <Box
        paddingX={[
          4, 6, 8, 12,
        ]} /* Responsive padding for different screen sizes */
        maxW="100vw" /* Restrict max width for larger screens */
        mx="auto" /* Center content on larger screens */
      >
        <Box id="about">
          <TechStackSection />
          <AboutSection />
          <WhoWeAreSection />
        </Box>
        <Box id="services">
          <ServiceSection />
        </Box>
        <Box id="projects">
          <OurWorkSection />
        </Box>
        <Box id="contact">
          <ContactFormSection />
        </Box>
      </Box>
      <CollaborateSection />
      <Footer />
    </Box>
  );
};

export default App;
