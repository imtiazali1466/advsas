// @ts-expect-error charaka UI Error for no reason - vscode issue
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#7E1FBA",
    secondary: "#293056",
    accent: "##9796F0",
    background: "#ffffff",
    text: "#293056",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  fontSizes: {
    h1: "32px",
    h2: "28px",
    body: "16px",
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
