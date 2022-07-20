import type { AppProps } from 'next/app'
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import theme from 'theme'
import ABDissolve from 'modules/shared/ab-dissolve'
import { useRouter } from 'next/router'
import Layout from 'modules/layout'
const manager = createLocalStorageManager('ab-key')

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter()
  return (
    <ChakraProvider colorModeManager={manager} theme={theme}>
      <ABDissolve duration={1.5} dissolveKey={route.route}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ABDissolve>
    </ChakraProvider>
  )
}

export default MyApp
