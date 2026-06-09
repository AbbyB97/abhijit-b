import { Container, Divider, useColorModeValue } from "@chakra-ui/react"
import AboutSection from "components/about-section"
import ContactSection from "components/contact-section"
import ExperienceSummary from "components/experience-summary"
import Footer from "components/footer"
import Hero from "components/hero"
import ProjectSection from "components/projects-section"
import SkillsSection from "components/skills-section"

const Home = () => {
  const dividerColor = useColorModeValue("gray.200", "whiteAlpha.300")

  return (
    <Container maxW="5xl">
      <Hero />
      <Divider bg={dividerColor} />
      <AboutSection />
      <Divider bg={dividerColor} />
      <ProjectSection />
      <Divider bg={dividerColor} />
      <ExperienceSummary />
      <Divider bg={dividerColor} />
      <SkillsSection />
      <Divider bg={dividerColor} />
      <ContactSection />
      <Footer />
    </Container>
  )
}

export default Home
