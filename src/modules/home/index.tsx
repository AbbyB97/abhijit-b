import { Box, useColorModeValue } from "@chakra-ui/react"
import AboutSection from "components/about-section"
import ContactSection from "components/contact-section"
import CurrentFocus from "components/current-focus"
import ExperienceSummary from "components/experience-summary"
import Footer from "components/footer"
import Hero from "components/hero"
import ProjectSection from "components/projects-section"
import SkillsSection from "components/skills-section"

const Home = () => {
  const dividerColor = useColorModeValue("gray.200", "whiteAlpha.100")

  return (
    <Box>
      <Hero />
      <Box h="1px" bg={dividerColor} />
      <AboutSection />
      <Box h="1px" bg={dividerColor} />
      <CurrentFocus />
      <Box h="1px" bg={dividerColor} />
      <ProjectSection />
      <Box h="1px" bg={dividerColor} />
      <ExperienceSummary />
      <Box h="1px" bg={dividerColor} />
      <SkillsSection />
      <Box h="1px" bg={dividerColor} />
      <ContactSection />
      <Footer />
    </Box>
  )
}

export default Home
