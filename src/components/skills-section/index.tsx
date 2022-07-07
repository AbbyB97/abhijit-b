import { ReactElement } from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  HStack
} from '@chakra-ui/react'
import {
  FcPhoneAndroid,
  FcDatabase,
  FcDonate,
  FcInTransit,
  FcGlobe
} from 'react-icons/fc'
import { BsGlobe } from 'react-icons/bs'
import { FaGamepad } from 'react-icons/fa'
interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack justify="center" textAlign="center">
      <HStack justify="center">
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}
        >
          {icon}
        </Flex>
      </HStack>

      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SkillsSection() {
  return (
    <Box p={4}>
      <Heading textAlign="center" my={12}>
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={FcGlobe} w={10} h={10} />}
          title={'Web Development'}
          text={
            'Experienced in making responsive scalable Web apps with React & Next.js.'
          }
        />
        <Feature
          icon={<Icon as={FcPhoneAndroid} w={10} h={10} />}
          title={'Mobile Development'}
          text={'Experienced in making hybrid mobile apps with React Native'}
        />
        <Feature
          icon={<Icon as={FcDatabase} w={10} h={10} />}
          title={'Backend Development'}
          text={
            'Understanding of the backend technologies like Node.js, Express.js, MongoDB, Django.'
          }
        />
        <Feature
          icon={<Icon as={FaGamepad} fill="blue.400" w={10} h={10} />}
          title={'Game Development'}
          text={
            'I also make games as a hobby. I have experience in making games with Unity & Godot.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}