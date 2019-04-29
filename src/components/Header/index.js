import React from "react";

import { Container, Title } from "./styles";

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Header;