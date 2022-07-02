import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import React from 'react'
import ProjectCard from 'widgets/project-card'
import projectCardDataArray from 'static/projectCardData'

const ProjectSection = () => {
  return (
    <>
      <Heading textAlign="center" my={12}>
        My recent projects
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }} gap="1rem">
        {projectCardDataArray.map((projectData, index) => (
          <GridItem
            key={index}
            colSpan={{
              base: 1,
              md: index + 1 === projectCardDataArray.length ? 2 : 1
            }}
          >
            <ProjectCard projectCardData={projectData} />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default ProjectSection
