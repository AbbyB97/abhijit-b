import { Flex, Heading, Stack, Text, Image } from "@chakra-ui/react"
import { Element } from "react-scroll"
import AButton from "widgets/AButton"
import { scroller } from "react-scroll"
import profileData from "static/portfolioProfile"

export default function HeroWidget() {
  return (
    <Element name="Hero-Section">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {profileData.header.lineOne}
          <Text as={"span"} color={"ABlue.200"}>
            {profileData.header.lineTwo}
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          {profileData.header.favouriteQuote}
          {" - "}
          {profileData.header.favouriteQuoteAuthor}
        </Text>
        <Stack spacing={6} direction={"row"}>
          <AButton
            onClick={() => {
              scroller.scrollTo("Projects-Section", {
                duration: 750,
                delay: 50,
                // smooth: true,
                // containerId: 'ContainerElementID',
                smooth: "easeInOutQuint",
                offset: -65 // Scrolls to element + 50 pixels down the page
              })
            }}
            buttontype="primary"
          >
            My Projects
          </AButton>
          <AButton
            buttontype="secondary"
            onClick={() => {
              scroller.scrollTo("Skills-Section", {
                duration: 750,
                delay: 50,
                // smooth: true,
                // containerId: 'ContainerElementID',
                smooth: "easeInOutQuint",
                offset: -65 // Scrolls to element + 50 pixels down the page
              })
            }}
          >
            About Me
          </AButton>
        </Stack>
        <Flex w={"full"} justify="center">
          <Image
            borderRadius="full"
            src="/images/avatar_ab.jpeg"
            alt="avatar_image"
            maxW="250px"
            maxH="250px"
          />
        </Flex>
      </Stack>
    </Element>
  )
}
