import { Container, Divider, useColorModeValue } from '@chakra-ui/react'
import Hero from 'components/home'
import ProjectSection from 'components/projects-section'
import React from 'react'

const index = () => {
  return (
    <Container maxW="5xl">
      <Hero />
      <Divider bg={useColorModeValue('ABlue.200', 'gray.200')} />
      <ProjectSection />
    </Container>
  )
}

export default index
