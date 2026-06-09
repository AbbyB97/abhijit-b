import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import { scroller } from "react-scroll"
import profileData from "static/portfolioProfile"

export default function Navbar() {
  const { isOpen, onToggle: onNavToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w={{ base: "91%", md: "95%" }} maxW="5xl" pos="fixed" zIndex={11}>
      <Flex
        bg={useColorModeValue("whiteAlpha.900", "gray.900")}
        backdropFilter="blur(8px)"
        color={useColorModeValue("gray.600", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onNavToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily="heading"
            fontWeight={700}
            _hover={{ cursor: "pointer" }}
            color={useColorModeValue("gray.800", "white")}
            onClick={() =>
              scroller.scrollTo("Hero-Section", {
                duration: 600,
                delay: 0,
                smooth: "easeInOutQuint",
                offset: -72
              })
            }
          >
            {profileData.name}
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={4}>
          <IconButton variant="ghost" aria-label="Toggle Theme" onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonFill /> : <BsFillSunFill />}
          </IconButton>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onNavToggle={onNavToggle} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.900", "white")

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{ textDecoration: "none", color: linkHoverColor }}
                onClick={() =>
                  scroller.scrollTo(navItem.sectionName, {
                    duration: 600,
                    delay: 0,
                    smooth: "easeInOutQuint",
                    offset: -72
                  })
                }
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = ({ onNavToggle }: { onNavToggle: () => void }) => {
  return (
    <Stack
      bg={useColorModeValue("whiteAlpha.900", "gray.900")}
      p={4}
      display={{ md: "none" }}
      w="97.5%"
      position="absolute"
      zIndex={10}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem onNavToggle={onNavToggle} key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({
  label,
  sectionName,
  onNavToggle
}: NavItem & { onNavToggle: () => void }) => {
  return (
    <Stack spacing={4}>
      <Flex py={2} as={Link} justify="space-between" align="center" _hover={{ textDecoration: "none" }}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          onClick={() => {
            scroller.scrollTo(sectionName, {
              duration: 600,
              delay: 0,
              smooth: "easeInOutQuint",
              offset: -72
            })
            onNavToggle()
          }}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  )
}

interface NavItem {
  label: string
  sectionName: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    sectionName: "About-Section"
  },
  {
    label: "Featured Work",
    sectionName: "Projects-Section"
  },
  {
    label: "Experience",
    sectionName: "Experience-Section"
  },
  {
    label: "Skills",
    sectionName: "Skills-Section"
  },
  {
    label: "Contact",
    sectionName: "Contact-Section"
  }
]
