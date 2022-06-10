import type { AppProps } from "next/app";
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import theme from "theme";
const manager = createLocalStorageManager('ab-key')


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider colorModeManager={manager} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
