import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { scroller } from 'react-scroll'

export default function Navbar() {
  const { isOpen, onToggle: onNavToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w={{ base: '91%', md: '95%' }} maxW="5xl" pos="fixed" zIndex={11}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onNavToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            _hover={{ cursor: 'pointer' }}
            color={useColorModeValue('gray.800', 'white')}
            onClick={() =>
              scroller.scrollTo('Hero-Section', {
                duration: 750,
                delay: 50,
                // smooth: true,
                // containerId: 'ContainerElementID',
                smooth: 'easeInOutQuint',
                offset: -65 // Scrolls to element + 50 pixels down the page
              })
            }
          >
            Abhijit
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <IconButton
            variant={'ghost'}
            aria-label={'Toggle Theme'}
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
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
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                // href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}
                onClick={() =>
                  scroller.scrollTo(navItem.sectionName, {
                    duration: 750,
                    delay: 50,
                    // smooth: true,
                    // containerId: 'ContainerElementID',
                    smooth: 'easeInOutQuint',
                    offset: -65 // Scrolls to element + 50 pixels down the page
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
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      w="97.5%"
      position="absolute"
      zIndex={10}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          onNavToggle={onNavToggle}
          key={navItem.label}
          {...navItem}
        />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({
  label,
  href,
  sectionName,
  onNavToggle
}: NavItem & { onNavToggle: () => void }) => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        // href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
          onClick={() => {
            scroller.scrollTo(sectionName, {
              duration: 750,
              delay: 50,
              // smooth: true,
              // containerId: 'ContainerElementID',
              smooth: 'easeInOutQuint',
              offset: -65 // Scrolls to element + 50 pixels down the page
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
  subLabel?: string
  href?: string
  sectionName: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Projects',
    sectionName: 'Projects-Section'
  },
  {
    label: 'Skills',
    sectionName: 'Skills-Section'
  },
  {
    label: 'Achievements',
    sectionName: 'Achievements-Section'
  },
  {
    label: 'Social',
    sectionName: 'Social-Section'
  }
]
