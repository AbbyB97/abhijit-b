import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const CurrentFocus = () => {
  const cardBg = useColorModeValue("gray.50", "whiteAlpha.50")
  const cardBorder = useColorModeValue("gray.200", "whiteAlpha.200")
  const textColor = useColorModeValue("gray.700", "gray.200")

  return (
    <Element name="Focus-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={6} letterSpacing="-0.02em">
          Current Focus
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
          {profileData.currentFocus.map((area) => (
            <Box
              key={area}
              px={4}
              py={3}
              rounded="lg"
              borderWidth="1px"
              borderColor={cardBorder}
              bg={cardBg}
            >
              <Text
                fontSize="sm"
                fontWeight={500}
                color={textColor}
                lineHeight="1.4"
              >
                {area}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  )
}

export default CurrentFocus
