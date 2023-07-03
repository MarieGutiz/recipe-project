import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./components/navbar/NavBar";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript  initialColorMode={theme.config.initialColorMode}   />
    <ChakraProvider theme={theme}>     
      <NavBar />
    </ChakraProvider>
  </React.StrictMode>
);
