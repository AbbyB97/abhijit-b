import { Container, Divider, useColorModeValue } from '@chakra-ui/react'
import Hero from 'components/hero'
import ProjectSection from 'components/projects-section'
import SocialHandles from 'components/social-handles'
import React from 'react'

const index = () => {
  return (
    <Container maxW="5xl">
      <Hero />
      <Divider bg={useColorModeValue('ABlue.200', 'gray.200')} />
      <ProjectSection />
      <SocialHandles />
    </Container>
  )
}

export default index
