import { Box, Container, Divider, useColorModeValue } from "@chakra-ui/react"
import AchievementsCarousel from "components/achievements-carousel"
import Footer from "components/footer"
import Hero from "components/hero"
import ProjectSection from "components/projects-section"
import SkillsSection from "components/skills-section"
import SocialHandles from "components/social-handles"
import React from "react"

const Home = () => {
  return (
    <Container maxW="5xl">
      <Hero />
      <Divider bg={useColorModeValue("ABlue.200", "gray.200")} />
      <ProjectSection />
      <Divider mt="4rem" bg={useColorModeValue("ABlue.200", "gray.200")} />
      <SkillsSection />
      <Divider mt="4rem" bg={useColorModeValue("ABlue.200", "gray.200")} />
      <AchievementsCarousel />
      <Divider mt="0rem" bg={useColorModeValue("ABlue.200", "gray.200")} />
      <SocialHandles />
      <Footer />
    </Container>
  )
}

export default Home
