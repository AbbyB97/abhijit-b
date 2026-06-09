import {
  Box,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue
} from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const ProjectSection = () => {
  return (
    <Element name="Projects-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8}>
          Featured Work
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {profileData.featuredWork.map((work) => (
            <Box
              key={work.title}
              p={{ base: 5, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
              bg={useColorModeValue("white", "whiteAlpha.50")}
              transition="transform 0.2s ease, border-color 0.2s ease"
              _hover={{
                transform: "translateY(-2px)",
                borderColor: useColorModeValue("gray.300", "whiteAlpha.500")
              }}
            >
              <Heading size="md" mb={3}>
                {work.title}
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")} mb={2}>
                Key focus areas:
              </Text>
              <UnorderedList spacing={1} color={useColorModeValue("gray.600", "gray.200")}>
                {work.highlights.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  )
}

export default ProjectSection
