// src/App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "./i18n";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Box textAlign="center" fontSize="xl" p={4}></Box>
    </Box>
  );
};

export default App;
