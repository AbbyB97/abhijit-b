import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from 'widgets/project-card'

const ProjectSection = () => {
  return (
    <>
      <Heading textAlign="center" my={12}>
        My recent projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </>
  )
}

export default ProjectSection
