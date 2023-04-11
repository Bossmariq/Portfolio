import { useEffect } from "react";
import Layout from "@/pages/Components";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import AOS from "aos";

const colors = {
  primary: {
    900: "#261405",
    800: "#4c2809",
    700: "#713c0e",
    600: "#975012",
    500: "#bd6417",
    400: "#ca8345",
    300: "#d7a274",
    200: "#e5c1a2",
    100: "#f2e0d1",
  },
  secondary: {
    900: "#030409",
    800: "#070712",
    700: "#0a0b1c",
    600: "#0e0e25",
    500: "#11122e",
    400: "#414158",
    300: "#707182",
    200: "#a0a0ab",
    100: "#cfd0d5",
  },
  light: { 100: "#fse9ce" },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
