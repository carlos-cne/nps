import React from "react";
import brasil_flag from "../../assets/iconfinder_Brazil_flat_91992.png";
import usa_flag from "../../assets/iconfinder_United-States_flat_92406.png";

import { Container, Title, LanguageButtons } from "./styles";

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <LanguageButtons>
      <a href="http://localhost:3000/?lang=pt-BR">
        <img src={brasil_flag} alt="Português - Brasil" />
      </a>
      <a href="http://localhost:3000/?lang=en-US">
        <img src={usa_flag} alt="English - USA" />
      </a>
    </LanguageButtons>
  </Container>
);

export default Header;
