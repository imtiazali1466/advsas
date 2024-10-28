"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import theme from "../../theme";

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  );
}
