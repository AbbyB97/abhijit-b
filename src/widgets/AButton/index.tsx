import { Button, ButtonProps, useColorMode } from '@chakra-ui/react'
import { AButtonProps } from './types'
const AButton = ({ buttonType, children }: AButtonProps & ButtonProps) => {
  const { colorMode } = useColorMode()

  const buttonBaseStyles: ButtonProps = {
    rounded: 'full',
    px: 6,
    w: { base: '117.5px', sm: '125px', md: '150px' },
    bg:
      buttonType === 'primary'
        ? 'ABlue.200'
        : colorMode === 'light'
        ? 'gray.100'
        : 'gray.700',
    _hover: {
      bg:
        buttonType === 'primary'
          ? 'ABlue.100'
          : colorMode === 'light'
          ? 'gray.200'
          : 'gray.600'
    },
    _active: {
      bg:
        buttonType === 'primary'
          ? 'ABlue.300'
          : colorMode === 'light'
          ? 'gray.300'
          : 'gray.700'
    },
    color:
      buttonType === 'primary'
        ? colorMode === 'light'
          ? 'white'
          : 'gray.800'
        : colorMode === 'light'
        ? 'gray.800'
        : 'gray.100'
  }
  return <Button {...buttonBaseStyles}>{children}</Button>
}

export default AButton
