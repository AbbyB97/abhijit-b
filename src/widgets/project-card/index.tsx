import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  chakra,
  Image,
  Flex,
  Button
} from '@chakra-ui/react'
import { ProjectCardDataType } from './types'

export default function ProjectCard({
  projectCardData
}: {
  projectCardData: ProjectCardDataType
}) {
  return (
    <Flex
      borderRadius="10px"
      bg="gray.100"
      _dark={{
        bg: 'blue.800'
      }}
      p={{ base: 3, md: 50 }}
      w="full"
      alignItems="center"
      justifyContent="center"
      minH="600px"
    >
      <Flex
        maxW="xs"
        mx="auto"
        bg="white"
        _dark={{
          bg: 'gray.800'
        }}
        shadow="lg"
        rounded="lg"
        minH="500px"
        direction="column"
        justify="space-between"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="gray.800"
            _dark={{
              color: 'white'
            }}
            fontWeight="bold"
            fontSize="3xl"
            textAlign="center"
            // textTransform="uppercase"
          >
            {projectCardData.projectHeading}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            textAlign="center"
            color="gray.600"
            _dark={{
              color: 'gray.400'
            }}
          >
            {projectCardData.projectDetail}
          </chakra.p>
        </Box>
        <Box>
          <Image
            w="full"
            fit="cover"
            mt={2}
            src={projectCardData.imgSrc}
            alt="NIKE AIR"
          />

          <Flex
            alignItems="center"
            justifyContent="center"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
            justify="center"
          >
            <Button
              px={2}
              py={0}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: 'gray.200'
              }}
              _focus={{
                bg: 'gray.400'
              }}
              onClick={() => window.open(projectCardData.projectLink, '_blank')}
            >
              View Project
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
