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

const App: React.FC = () => {
  return (
    <Box minWidth={"100vw"}>
      <Navbar />
      <HeroSection />
      <Box paddingX={8}>
        <AboutSection />
        <WhoWeAreSection />
        <ServiceSection />
      </Box>
    </Box>
  );
};

export default App;
