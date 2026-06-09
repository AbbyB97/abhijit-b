import {
  Badge,
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { Element, scroller } from "react-scroll"
import profileData from "static/portfolioProfile"
import AButton from "widgets/AButton"

export default function HeroWidget() {
  const subtitleColor = useColorModeValue("gray.600", "gray.300")
  const statementColor = useColorModeValue("gray.500", "gray.400")
  const badgeBg = useColorModeValue("gray.100", "whiteAlpha.200")
  const badgeColor = useColorModeValue("gray.700", "gray.100")
  const imageBorder = useColorModeValue("gray.200", "whiteAlpha.200")

  return (
    <Element name="Hero-Section">
      <Flex
        pt={{ base: 24, md: 32 }}
        pb={{ base: 14, md: 20 }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: 8, md: 16 }}
      >
        {/* Text content — order 1 on mobile (below image), order 0 on desktop (left) */}
        <Stack spacing={5} flex={1} order={{ base: 1, md: 0 }}>
          <Badge
            w="fit-content"
            px={3}
            py={1}
            rounded="full"
            bg={badgeBg}
            color={badgeColor}
            fontWeight={500}
            fontSize="xs"
            textTransform="none"
            letterSpacing="0.03em"
          >
            {profileData.title}
          </Badge>
          <Heading
            fontWeight={700}
            letterSpacing="-0.03em"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight={{ base: "1.2", md: "1.1" }}
          >
            {profileData.name}
          </Heading>
          <Text
            color={subtitleColor}
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={500}
            letterSpacing="0.04em"
            textTransform="uppercase"
          >
            {profileData.subtitle}
          </Text>
          <Text
            maxW="xl"
            color={statementColor}
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            fontWeight={400}
          >
            {profileData.heroStatement}
          </Text>
          <HStack spacing={3} flexWrap="wrap" pt={1}>
            <AButton
              buttontype="primary"
              onClick={() =>
                scroller.scrollTo("Projects-Section", {
                  duration: 600,
                  delay: 0,
                  smooth: "easeInOutQuint",
                  offset: -72
                })
              }
            >
              Featured Work
            </AButton>
            <AButton
              buttontype="secondary"
              onClick={() =>
                scroller.scrollTo("Contact-Section", {
                  duration: 600,
                  delay: 0,
                  smooth: "easeInOutQuint",
                  offset: -72
                })
              }
            >
              Get in Touch
            </AButton>
          </HStack>
        </Stack>

        {/* Headshot — order 0 on mobile (above text), order 1 on desktop (right) */}
        <Box
          flexShrink={0}
          order={{ base: 0, md: 1 }}
          alignSelf={{ base: "flex-start", md: "center" }}
        >
          <Box
            w={{ base: "96px", md: "172px" }}
            h={{ base: "96px", md: "172px" }}
            rounded="2xl"
            overflow="hidden"
            borderWidth="1px"
            borderColor={imageBorder}
          >
            <Image
              src="/images/avatar_ab.jpeg"
              alt="Abhijit B"
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Flex>
    </Element>
  )
}
