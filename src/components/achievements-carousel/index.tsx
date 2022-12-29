import React from "react"
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  HStack,
  Icon
} from "@chakra-ui/react"
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
// And react-slick as our Carousel Lib
import Slider from "react-slick"
import { Element } from "react-scroll"

// Settings for the slider
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

export default function AchievementsCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" })
  const side = useBreakpointValue({ base: "30%", md: "40px" })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Project Competition Winner",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/images/achievements/1.jpg"
    },

    {
      title: "Smart India Hackathon Finalist",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/images/achievements/3.jpg"
    },
    {
      title: "Project Competition Winner",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/images/achievements/2.jpg"
    },
    {
      title: "GDG organizer",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/images/achievements/4.jpeg"
    },
    {
      title: "TechNgage Hackathon",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/images/achievements/6.jpg"
    }
  ]

  return (
    <Element name="Achievements-Section">
      <Box
        position={"relative"}
        height={"550px"}
        width={"full"}
        overflow={"hidden"}
      >
        <Heading textAlign="center" my={12}>
          Achievements
        </Heading>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}

        {/* Right Icon */}

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index}>
              <Heading
                mb="10px"
                textAlign="center"
                fontSize={{ base: "21px", lg: "24px" }}
                color="gray.400"
                fontWeight={500}
              >
                {card.title}
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
                <Image h="300px" src={card.image} alt="achievements-img" />
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
      </Box>
    </Element>
  )
}
