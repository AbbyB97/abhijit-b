import {
  Box,
  Flex,
  Heading,
  HStack,
  Spinner,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const SocialHandles = () => {
  const { colorMode } = useColorMode()
  console.log(' dark colorMode', colorMode === 'dark')
  console.log('light colorMode', colorMode === 'light')
  const [isTimeLineLoaded, setIsTimeLineLoaded] = useState(false)
  useEffect(() => {
    setIsTimeLineLoaded(false)
  }, [colorMode])

  return (
    <Box>
      <Heading textAlign="center" my={12}>
        Social Handles
      </Heading>
      <HStack justify="center">
        <VStack p="1rem" justify="center" align="center">
          {!isTimeLineLoaded && (
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
          <Box px="10px" pt="10px" bg="white">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="b_abby97"
              options={{ height: 400, width: 300 }}
              noScrollbar={true}
              noFooter={true}
              onLoad={() => setIsTimeLineLoaded(true)}
              theme={colorMode === 'dark' ? 'dark' : 'light'}
              key={colorMode === 'dark' ? 'dark' : 'light'}
            />
          </Box>
        </VStack>
      </HStack>
    </Box>
  )
}

export default SocialHandles
