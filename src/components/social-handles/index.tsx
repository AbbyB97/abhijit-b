import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  Stack,
  useColorMode,
  VStack
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { Element } from "react-scroll"
import portfolioProfile from "static/portfolioProfile"
import { doesTwitterHandleExist } from "helpers/common"

const SocialHandles = () => {
  const { colorMode } = useColorMode()
  console.log(" dark colorMode", colorMode === "dark")
  console.log("light colorMode", colorMode === "light")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
  }, [colorMode])

  useEffect(() => {
    // set loading to false since we dont have twitter handle
    if (!doesTwitterHandleExist(portfolioProfile.socialHandles)) {
      setLoading(false)
    }
  }, [])

  return (
    <Element name="Social-Section">
      <Box>
        <Heading textAlign="center" my={12}>
          Social Handles
        </Heading>
        {loading && (
          <HStack p="1rem" justify="center" align="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              borderRadius="full"
            />
          </HStack>
        )}
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justify="center"
          align="center"
        >
          {!loading && (
            <Stack
              justify="center"
              align="center"
              direction={{
                base: "row",
                md: doesTwitterHandleExist(portfolioProfile.socialHandles)
                  ? "column"
                  : "row"
              }}
            >
              {portfolioProfile.socialHandles.map((socialHandle, index) => (
                <Box key={index}>
                  <Icon
                    onClick={() =>
                      window?.open(`${socialHandle.link}`, "_blank")
                    }
                    _hover={{ cursor: "pointer" }}
                    h="2.5rem"
                    w="2.5rem"
                    as={socialHandle.icon}
                  />
                </Box>
              ))}
            </Stack>
          )}

          {doesTwitterHandleExist(portfolioProfile.socialHandles) && (
            <VStack p="1rem" justify="center" align="center">
              <Box
                maxH="500px"
                overflowY="scroll"
                css={{
                  "&::-webkit-scrollbar": {
                    width: "4px"
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "6px"
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "gray",
                    borderRadius: "24px"
                  }
                }}
                px="10px"
                pt="10px"
                bg="white"
              >
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="b_abby97"
                  options={{ height: 400, width: 300 }}
                  noScrollbar={true}
                  noFooter={true}
                  onLoad={() => setLoading(false)}
                  theme={colorMode === "dark" ? "dark" : "light"}
                  key={colorMode === "dark" ? "dark" : "light"}
                />
              </Box>
            </VStack>
          )}
        </Stack>
      </Box>
    </Element>
  )
}

export default SocialHandles
