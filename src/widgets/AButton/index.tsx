import { Button, ButtonProps, useColorMode } from "@chakra-ui/react"
import { AButtonProps } from "./types"
const AButton = (props: AButtonProps & ButtonProps) => {
  const { colorMode } = useColorMode()
  const { buttontype, children } = props
  const buttonBaseStyles: ButtonProps = {
    rounded: "full",
    px: 6,
    w: { base: "117.5px", sm: "125px", md: "150px" },
    bg:
      buttontype === "primary"
        ? "ABlue.200"
        : colorMode === "light"
        ? "gray.100"
        : "gray.700",
    _hover: {
      bg:
        buttontype === "primary"
          ? "ABlue.100"
          : colorMode === "light"
          ? "gray.200"
          : "gray.600"
    },
    _active: {
      bg:
        buttontype === "primary"
          ? "ABlue.300"
          : colorMode === "light"
          ? "gray.300"
          : "gray.700"
    },
    color:
      buttontype === "primary"
        ? colorMode === "light"
          ? "white"
          : "gray.800"
        : colorMode === "light"
        ? "gray.800"
        : "gray.100"
  }
  return (
    <Button {...props} {...buttonBaseStyles}>
      {children}
    </Button>
  )
}

export default AButton
