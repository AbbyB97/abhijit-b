import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const ExperienceSummary = () => {
  return (
    <Element name="Experience-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8}>
          Experience Summary
        </Heading>
        <Stack spacing={6}>
          {profileData.experienceSummary.map((item) => (
            <Stack
              key={`${item.period}-${item.title}`}
              spacing={2}
              pl={4}
              borderLeftWidth="2px"
              borderColor={useColorModeValue("gray.300", "whiteAlpha.400")}
            >
              <Text
                fontSize="sm"
                fontWeight={600}
                color={useColorModeValue("gray.500", "gray.400")}
              >
                {item.period}
              </Text>
              <Heading size="sm">{item.title}</Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                {item.description}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Element>
  )
}

export default ExperienceSummary
