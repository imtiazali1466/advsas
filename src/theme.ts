// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    accent: "#e74c3c",
    background: "#ecf0f1",
    text: "#34495e",
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
  fontSizes: {
    h1: "32px",
    h2: "28px",
    body: "16px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
    },
  },
});

export default theme;
