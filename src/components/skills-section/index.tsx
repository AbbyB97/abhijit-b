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
  { label: "Frontend", key: "frontend" as const },
  { label: "Platform Engineering", key: "platformEngineering" as const },
  { label: "Backend", key: "backend" as const },
  { label: "Cloud", key: "cloud" as const },
  { label: "AI", key: "ai" as const }
]

export default function SkillsSection() {
  const cardBorder = useColorModeValue("gray.200", "whiteAlpha.200")
  const cardBg = useColorModeValue("white", "whiteAlpha.50")
  const tagBg = useColorModeValue("gray.100", "whiteAlpha.150")
  const tagColor = useColorModeValue("gray.600", "gray.300")
  const labelColor = useColorModeValue("gray.700", "gray.200")

  return (
    <Element name="Skills-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8} letterSpacing="-0.02em">
          Skills
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {skillGroups.map((group, i) => (
            <Stack
              key={group.key}
              spacing={3}
              p={{ base: 4, md: 5 }}
              rounded="xl"
              borderWidth="1px"
              borderColor={cardBorder}
              bg={cardBg}
              gridColumn={i === skillGroups.length - 1 && skillGroups.length % 2 !== 0 ? { md: "span 2" } : undefined}
            >
              <Text fontWeight={600} fontSize="sm" color={labelColor} letterSpacing="0.02em">
                {group.label}
              </Text>
              <Wrap spacing={2}>
                {profileData.skills[group.key].map((skill) => (
                  <WrapItem key={skill}>
                    <Tag
                      size="md"
                      rounded="full"
                      bg={tagBg}
                      color={tagColor}
                      fontWeight={500}
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
