import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import  ReactDOM  from "react";
import App from "../App";
import theme from "../theme";
import ToggleColorMode from "./toggleColorMode";

ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    <ToggleColorMode />
    </ChakraProvider>





);

         
