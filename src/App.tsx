// src/App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "./i18n";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/sections/HeroSection";

const App: React.FC = () => {
  return (
    <Box minWidth={"100vw"}>
      <Navbar />
      <HeroSection />
    </Box>
  );
};

export default App;
