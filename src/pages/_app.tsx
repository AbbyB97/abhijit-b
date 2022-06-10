import type { AppProps } from "next/app";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import theme from "theme";
import ABDissolve from "components/shared/ab-dissolve";
import {  useRouter } from "next/router";
const manager = createLocalStorageManager("ab-key");

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <ChakraProvider colorModeManager={manager} theme={theme}>
      <ABDissolve duration={1.5} key={route.route}>
        <Component {...pageProps} />
      </ABDissolve>
    </ChakraProvider>
  );
}

export default MyApp;
