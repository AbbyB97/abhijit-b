import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill, BsMoonFill } from "react-icons/bs";

export default function HeroWidget() {
  const { colorMode, toggleColorMode } = useColorMode();
  //   const bg = useColorModeValue("red.500", "red.200");
  //   const color = useColorModeValue("white", "gray.800");

  return (
    <Container maxW={"5xl"}>
      <Flex mt={2} justify="right">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <BsMoonFill /> : <BsFillSunFill />}
        </Button>
      </Flex>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          A Self Taught{" "}
          <Text as={"span"} color={"ABlue.200"}>
            Developer
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          &quot;Pleasure in the job puts perfection in the work&quot; -
          Aristotle.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"blue"}
            bg={"#175ce2"}
            _hover={{ bg: colorMode === "light" ? "ABlue.300":"ABlue.100" }}
            w="150px"
          >
            My Projects
          </Button>
          <Button rounded={"full"} px={6} w="150px">
            About Me
          </Button>
        </Stack>
        <Flex w={"full"} justify="center">
          <Image
            borderRadius="full"
            src="/images/avatar_ab.jpeg"
            alt="avatar_image"
          />
        </Flex>
      </Stack>
    </Container>
  );
}
