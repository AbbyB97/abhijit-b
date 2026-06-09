import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const AboutSection = () => {
  return (
    <Element name="About-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={5} letterSpacing="-0.02em">
          About
        </Heading>
        <Text
          maxW="3xl"
          color={useColorModeValue("gray.600", "gray.300")}
          lineHeight="1.8"
          fontSize={{ base: "md", md: "lg" }}
        >
          {profileData.about}
        </Text>
      </Box>
    </Element>
  )
}

export default AboutSection
