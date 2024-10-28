// src/App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "./i18n";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/sections/Hero";
import AboutSection from "./components/sections/About";

const App: React.FC = () => {
  return (
    <Box minWidth={"100vw"}>
      <Navbar />
      <HeroSection />
      <Box paddingX={8}>
        <AboutSection />
      </Box>
    </Box>
  );
};

export default App;
