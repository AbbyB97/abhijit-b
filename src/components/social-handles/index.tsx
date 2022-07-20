import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import {
  AiFillGithub,
  AiFillMediumCircle,
  AiFillTwitterCircle
} from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { Element } from 'react-scroll'

const SocialHandles = () => {
  const { colorMode } = useColorMode()
  console.log(' dark colorMode', colorMode === 'dark')
  console.log('light colorMode', colorMode === 'light')
  const [isTimeLineLoaded, setIsTimeLineLoaded] = useState(false)
  useEffect(() => {
    setIsTimeLineLoaded(false)
  }, [colorMode])

  return (
    <Element name="Social-Section">
      <Box>
        <Heading textAlign="center" my={12}>
          Social Handles
        </Heading>
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
        <HStack justify="center">
          {isTimeLineLoaded && (
            <VStack>
              <Box>
                <Icon
                  onClick={() =>
                    window?.open('https://github.com/AbbyB97', '_blank')
                  }
                  _hover={{ cursor: 'pointer' }}
                  h="2.5rem"
                  w="2.5rem"
                  as={AiFillGithub}
                />
              </Box>
              <Box>
                <Icon
                  onClick={() =>
                    window?.open(
                      'https://www.linkedin.com/in/abhijit-b97/',
                      '_blank'
                    )
                  }
                  _hover={{ cursor: 'pointer' }}
                  h="3.4rem"
                  w="3.4rem"
                  as={TiSocialLinkedinCircular}
                />
              </Box>
              <Box>
                <Icon
                  onClick={() =>
                    window?.open('https://medium.com/@abhijitbansode', '_blank')
                  }
                  _hover={{ cursor: 'pointer' }}
                  h="3.5rem"
                  w="2.9rem"
                  as={AiFillMediumCircle}
                />
              </Box>
              <Box>
                <Icon
                  onClick={() =>
                    window?.open('https://twitter.com/b_abby97', '_blank')
                  }
                  _hover={{ cursor: 'pointer' }}
                  h="3.5rem"
                  w="2.9rem"
                  as={AiFillTwitterCircle}
                />
              </Box>
            </VStack>
          )}
          <VStack p="1rem" justify="center" align="center">
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
          u
        </HStack>
      </Box>
    </Element>
  )
}

export default SocialHandles
