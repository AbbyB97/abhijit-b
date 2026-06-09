import { Flex, Text, useColorModeValue } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex w="full" py={10} alignItems="center" justifyContent="center">
      <Text color={useColorModeValue("gray.500", "gray.400")} fontSize="sm">
        © {new Date().getFullYear()} Abhijit B. Built with a focus on scalable engineering.
      </Text>
    </Flex>
  )
}

export default Footer
