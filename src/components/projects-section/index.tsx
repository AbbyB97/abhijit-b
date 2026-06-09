import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const ProjectSection = () => {
  const cardBorder = useColorModeValue("gray.200", "whiteAlpha.200")
  const cardBg = useColorModeValue("white", "whiteAlpha.50")
  const hoverBorder = useColorModeValue("gray.400", "whiteAlpha.400")
  const bodyText = useColorModeValue("gray.600", "gray.300")
  const tagBg = useColorModeValue("gray.100", "whiteAlpha.150")
  const tagColor = useColorModeValue("gray.600", "gray.300")

  return (
    <Element name="Projects-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8} letterSpacing="-0.02em">
          Featured Work
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {profileData.featuredWork.map((work) => (
            <Flex
              key={work.title}
              direction="column"
              p={{ base: 5, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              borderColor={cardBorder}
              bg={cardBg}
              transition="border-color 0.15s ease"
              _hover={{ borderColor: hoverBorder }}
            >
              <Heading size="sm" mb={3} letterSpacing="-0.01em">
                {work.title}
              </Heading>
              <Text
                color={bodyText}
                fontSize="sm"
                lineHeight="1.75"
                mb={5}
                flex={1}
              >
                {work.description}
              </Text>
              <Wrap spacing={2} mt="auto">
                {work.tags.map((tag) => (
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
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  )
}

export default ProjectSection
