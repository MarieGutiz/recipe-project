import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "#ffd634",
        _dark: "#ffd634",
      },
      secondary: {
        default: "#f50057",
        _dark: "#f50057",
      },
      text_hover:{
        default:'white'
      }
    },
  },
});

export default theme;
export function deleteColorModeInLocalStorage() {
  window.localStorage.removeItem("chakra-ui-color-mode");  
   
}

setTimeout(deleteColorModeInLocalStorage, 3000);
