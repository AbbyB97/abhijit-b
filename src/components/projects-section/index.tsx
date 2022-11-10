import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import React from 'react'
import ProjectCard from 'widgets/project-card'
import projectCardDataArray from 'static/portfolioProfile'
// https://pbs.twimg.com/profile_images/1059481903496073218/NZLDqzp6_400x400.jpg
const ProjectSection = () => {
  return (
    <Element name="Projects-Section">
      <Heading textAlign="center" my={12}>
        My recent projects
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }} gap="1rem">
        {projectCardDataArray.projectCards.map((projectData, index) => (
          <GridItem
            key={index}
            colSpan={{
              base: 1,
              md:
                index + 1 === projectCardDataArray.projectCards.length &&
                projectCardDataArray.projectCards.length % 2 !== 0
                  ? 2
                  : 1
            }}
          >
            <ProjectCard projectCardData={projectData} />
          </GridItem>
        ))}
      </Grid>
    </Element>
  )
}

export default ProjectSection
