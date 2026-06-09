import {
  Box,
  Flex,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const ExperienceSummary = () => {
  const cardBorder = useColorModeValue("gray.200", "whiteAlpha.200")
  const cardBg = useColorModeValue("white", "whiteAlpha.50")
  const periodText = useColorModeValue("gray.500", "gray.400")
  const roleText = useColorModeValue("gray.500", "gray.400")
  const bodyText = useColorModeValue("gray.600", "gray.300")
  const tagBg = useColorModeValue("gray.100", "whiteAlpha.150")
  const tagColor = useColorModeValue("gray.600", "gray.300")

  return (
    <Element name="Experience-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8} letterSpacing="-0.02em">
          Experience
        </Heading>
        <Stack spacing={4}>
          {profileData.experience.map((item) => (
            <Box
              key={`${item.company}-${item.period}`}
              p={{ base: 5, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              borderColor={cardBorder}
              bg={cardBg}
            >
              <Flex
                justify="space-between"
                align="flex-start"
                mb={3}
                wrap="wrap"
                gap={2}
              >
                <Box>
                  <Heading size="sm" letterSpacing="-0.01em">
                    {item.company}
                  </Heading>
                  <Text fontSize="sm" color={roleText} fontWeight={500} mt={0.5}>
                    {item.title}
                  </Text>
                </Box>
                <Text fontSize="sm" color={periodText} fontWeight={500} flexShrink={0}>
                  {item.period}
                </Text>
              </Flex>
              <Text color={bodyText} fontSize="sm" lineHeight="1.75" mb={4}>
                {item.description}
              </Text>
              <Wrap spacing={2}>
                {item.highlights.map((tag) => (
                  <WrapItem key={tag}>
                    <Tag
                      size="sm"
                      rounded="full"
                      bg={tagBg}
                      color={tagColor}
                      fontSize="xs"
                      fontWeight={500}
                    >
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          ))}
        </Stack>
      </Box>
    </Element>
  )
}

export default ExperienceSummary
