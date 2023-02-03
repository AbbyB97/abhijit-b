import { Flex, chakra, Icon } from "@chakra-ui/react"
import React from "react"

const Footer = () => {
  return (
    <Flex w="full" pt={50} alignItems="center" justifyContent="center">
      <Flex
        w="full"
        as="footer"
        flexDir={{
          base: "column",
          sm: "row"
        }}
        align="center"
        justify="center"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800"
        }}
      >
        <chakra.p
          py={{
            base: "2",
            sm: "0"
          }}
          color="gray.800"
          _dark={{
            color: "white"
          }}
        >
          ©Copyright. All rights reserved
        </chakra.p>
      </Flex>
    </Flex>
  )
}

export default Footer
