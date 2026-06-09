import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const ExperienceSummary = () => {
  const timelineBorder = useColorModeValue("gray.300", "whiteAlpha.400")
  const periodText = useColorModeValue("gray.500", "gray.400")
  const bodyText = useColorModeValue("gray.600", "gray.300")

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
              borderColor={timelineBorder}
            >
              <Text fontSize="sm" fontWeight={600} color={periodText}>
                {item.period}
              </Text>
              <Heading size="sm">{item.title}</Heading>
              <Text color={bodyText}>{item.description}</Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Element>
  )
}

export default ExperienceSummary
