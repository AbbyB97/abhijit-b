import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  colors: {
    ABlue: {
      100: "#4d81e9",
      200: "#175ce2",
      300: "#124dc2",
      400: "#0f3caa",
      500: "#0b2b92"
    }
  },
  styles: {
    global: {
      body: {
        letterSpacing: "-0.01em"
      }
    }
  }
})

export default theme
