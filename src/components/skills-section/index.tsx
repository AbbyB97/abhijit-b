import {
  Box,
  Heading,
  SimpleGrid,
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

const skillGroups = [
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Cloud", key: "cloud" },
  { label: "Platform Engineering", key: "platformEngineering" },
  { label: "AI Tooling", key: "aiTooling" }
] as const

export default function SkillsSection() {
  return (
    <Element name="Skills-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8}>
          Skills
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {skillGroups.map((group) => (
            <Stack
              key={group.key}
              spacing={4}
              p={{ base: 4, md: 5 }}
              rounded="xl"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
              bg={useColorModeValue("white", "whiteAlpha.50")}
            >
              <Text fontWeight={600}>{group.label}</Text>
              <Wrap>
                {profileData.skills[group.key].map((skill) => (
                  <WrapItem key={skill}>
                    <Tag
                      size="md"
                      rounded="full"
                      bg={useColorModeValue("gray.100", "whiteAlpha.200")}
                    >
                      <TagLabel>{skill}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  )
}
