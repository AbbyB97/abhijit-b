import { Flex, Heading, Stack, Text, Image } from '@chakra-ui/react'
import AButton from 'widgets/AButton'

export default function HeroWidget() {
  return (
    <Stack
      textAlign={'center'}
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
      >
        A Self Taught{' '}
        <Text as={'span'} color={'ABlue.200'}>
          Developer
        </Text>
      </Heading>
      <Text color={'gray.500'} maxW={'3xl'}>
        &quot;Pleasure in the job puts perfection in the work&quot; - Aristotle.
      </Text>
      <Stack spacing={6} direction={'row'}>
        <AButton buttonType="primary">My Projects</AButton>
        <AButton buttonType="secondary">About Me</AButton>
      </Stack>
      <Flex w={'full'} justify="center">
        <Image
          borderRadius="full"
          src="/images/avatar_ab.jpeg"
          alt="avatar_image"
          maxW="300px"
          maxH="300px"
        />
      </Flex>
    </Stack>
  )
}
