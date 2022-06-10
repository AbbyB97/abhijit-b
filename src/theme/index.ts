// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colorsConfig = {
    colors: {
        ABlue: {
            100: '#4d81e9',
            200: '#175ce2',
            300: '#124dc2',
            400: '#0f3caa',
            500: '#0b2b92',
        }
    }
}


// 3. extend the theme
const theme = extendTheme({
    ...config,
    ...colorsConfig 

})

export default theme