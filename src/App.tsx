// src/App.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "./i18n";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <Box minWidth={"100%"}>
      <Navbar />
    </Box>
  );
};

export default App;
