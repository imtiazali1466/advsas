import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#EAB8E3", // Light shade
    200: "#D49CD0",
    300: "#C482BD",
    400: "#A64FA0",
    500: "#7E1FBA", // Main color
    600: "#6D1B9D",
    700: "#5B1780",
    800: "#491364",
    900: "#380B48", // Dark shade
  },
  secondary: {
    100: "#B3B8D4",
    200: "#8F94B5",
    300: "#6B708F",
    400: "#47517C",
    500: "#293056", // Main color
    600: "#1E2450",
    700: "#1A1E39",
    800: "#15172A",
    900: "#10121B", // Dark shade
  },
  accent: {
    100: "#E1D8FF",
    200: "#C5B3FF",
    300: "#A88CFF",
    400: "#8C66FF",
    500: "#9796F0", // Main color
    600: "#7B7BB4",
    700: "#616188",
    800: "#474D5D",
    900: "#2C2A31", // Dark shade
  },
  lavender: {
    // New color palette
    100: "#D3D5FF", // Light shade
    200: "#A7A9FF",
    300: "#7B7FFF",
    400: "#4F52FF",
    500: "#9796F0", // Main color
    600: "#7878D8",
    700: "#5A5ABC",
    800: "#3C3C99",
    900: "#1E1E66", // Dark shade
  },
  black: {
    100: "#F5F5F5", // Lightest shade of black
    200: "#E0E0E0",
    300: "#BDBDBD",
    400: "#9E9E9E",
    500: "#757575", // Main grey
    600: "#616161",
    700: "#424242",
    800: "#212121",
    900: "#000000", // Darkest black
  },
  white: {
    100: "#FFFFFF", // Main white
    200: "#F9F9F9",
    300: "#F0F0F0",
    400: "#E0E0E0",
    500: "#D0D0D0", // Soft white
  },
  grey: {
    100: "#F7FAFC", // Lightest grey
    200: "#EDF2F7",
    300: "#E2E8F0",
    400: "#CBD5E0",
    500: "#A0AEC0", // Main grey
    600: "#718096",
    700: "#4A5568",
    800: "#2D3748",
    900: "#1A202C", // Darkest grey
  },
  background: "#ffffff",
  text: "#293056",
  navbar: "#1E1E1E",
};

const fonts = {
  heading: "Poppins, sans-serif",
  body: "Poppins, sans-serif",
};

const fontSizes = {
  h1: "32px",
  h2: "28px",
  body: "16px",
};

const space = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "32px",
  8: "40px",
  9: "48px",
  10: "64px",
  11: "72px",
  12: "80px",
};

// Define line heights from 1 to 12
const lineHeights = {
  1: "1",
  2: "1.25",
  3: "1.5",
  4: "1.75",
  5: "2",
  6: "2.25",
  7: "2.5",
  8: "2.75",
  9: "3",
  10: "3.25",
  11: "3.5",
  12: "4",
};

const styles = {
  global: {
    body: {
      bg: "background",
      color: "text",
      padding: 0,
      margin: 0,
      overflowX: "hidden",
    },
    ".chakra-container": {
      padding: space[4],
    },
    ".chakra-button": {
      padding: `${space[2]} ${space[4]}`,
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  space,
  lineHeights, // Add line heights to the theme
  styles,
});

export default theme;
