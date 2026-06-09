import {
  Badge,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { Element, scroller } from "react-scroll"
import profileData from "static/portfolioProfile"
import AButton from "widgets/AButton"

export default function HeroWidget() {
  return (
    <Element name="Hero-Section">
      <Stack
        pt={{ base: 24, md: 32 }}
        pb={{ base: 14, md: 20 }}
        spacing={6}
        textAlign={{ base: "left", md: "left" }}
      >
        <Badge
          w="fit-content"
          px={3}
          py={1}
          rounded="full"
          bg={useColorModeValue("gray.100", "whiteAlpha.200")}
          color={useColorModeValue("gray.700", "gray.100")}
        >
          {profileData.title}
        </Badge>
        <Heading
          fontWeight={700}
          letterSpacing="tight"
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight={{ base: "1.2", md: "1.1" }}
        >
          {profileData.name}
        </Heading>
        <Text
          maxW="3xl"
          color={useColorModeValue("gray.600", "gray.300")}
          fontSize={{ base: "md", md: "xl" }}
        >
          {profileData.subtitle}
        </Text>
        <HStack spacing={4} flexWrap="wrap">
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
            View Featured Work
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
            Contact
          </AButton>
        </HStack>
      </Stack>
    </Element>
  )
}
