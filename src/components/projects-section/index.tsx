import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  useBreakpointValue,
  Icon,
  Image
} from "@chakra-ui/react"
import { Element } from "react-scroll"
import React from "react"
import ProjectCard from "widgets/project-card"
import projectCardDataArray from "static/portfolioProfile"
import Slider from "react-slick"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
// https://pbs.twimg.com/profile_images/1059481903496073218/NZLDqzp6_400x400.jpg
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
}
const ProjectSection = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null)
  const side = useBreakpointValue({ base: "30%", md: "40px" })
  const top = useBreakpointValue({ base: "90%", md: "50%" })
  const firstProjectLink = projectCardDataArray.projectCards[0].projectLink
  const [projectLink, setProjectLink] = React.useState<string>(firstProjectLink)

  return (
    <Element name="Projects-Section">
      <Heading textAlign="center" my={12}>
        My recent projects
      </Heading>
      <Slider
        {...settings}
        ref={(slider) => setSlider(slider)}
        beforeChange={(current, next) => {
          console.log("before change", current, next)
          setProjectLink(projectCardDataArray.projectCards[next].projectLink)
        }}
      >
        {projectCardDataArray.projectCards.map((card, index) => (
          <Box key={index}>
            <Heading
              mb="10px"
              textAlign="center"
              fontSize={{ base: "21px", lg: "24px" }}
              color="gray.400"
              fontWeight={500}
            >
              {card.projectHeading}
            </Heading>
            <HStack
              h={{ base: "22.5rem", md: "auto" }}
              justify="center"
              align="center"
            >
              <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
              >
                <Icon
                  as={BiLeftArrowAlt}
                  color={{ base: "white", md: "gray.500" }}
                  size="30px"
                />
              </IconButton>
              <Image
                h="350px"
                src={card.imgSrc}
                alt="achievements-img"
                onClick={() => {
                  window.open(projectLink, "_blank")
                }}
              />
              <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
              >
                <Icon
                  as={BiRightArrowAlt}
                  color={{ base: "white", md: "gray.500" }}
                  size="30px"
                />
              </IconButton>
            </HStack>
          </Box>
        ))}
      </Slider>
      {/* <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap="1rem">
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
      </Grid> */}
    </Element>
  )
}

export default ProjectSection
