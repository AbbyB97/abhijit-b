import { Container } from "@chakra-ui/react";
import Navbar from "modules/shared/nav-bar";
import React, { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <Container maxW={"5xl"}>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
