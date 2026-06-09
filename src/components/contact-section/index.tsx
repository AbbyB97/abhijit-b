import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { Element } from "react-scroll"
import profileData from "static/portfolioProfile"

const contactItems = [
  { label: "GitHub", href: profileData.contact.github },
  { label: "LinkedIn", href: profileData.contact.linkedin },
  { label: "Email", href: profileData.contact.email }
]

const ContactSection = () => {
  const cardBorder = useColorModeValue("gray.200", "whiteAlpha.300")
  const cardBg = useColorModeValue("white", "whiteAlpha.50")
  const labelColor = useColorModeValue("gray.500", "gray.400")
  const linkColor = useColorModeValue("gray.800", "gray.100")

  return (
    <Element name="Contact-Section">
      <Box py={{ base: 10, md: 14 }}>
        <Heading size="lg" mb={8}>
          Contact
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {contactItems.map((item) => (
            <Box
              key={item.label}
              p={5}
              rounded="xl"
              borderWidth="1px"
              borderColor={cardBorder}
              bg={cardBg}
            >
              <Text mb={2} fontSize="sm" color={labelColor}>
                {item.label}
              </Text>
              <Link
                href={item.href}
                isExternal={item.label !== "Email"}
                color={linkColor}
                fontWeight={600}
              >
                {item.label === "Email"
                  ? item.href.replace("mailto:", "")
                  : item.href.replace("https://", "")}
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  )
}

export default ContactSection
