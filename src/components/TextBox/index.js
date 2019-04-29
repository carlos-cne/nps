import React from "react";

import { Container, Title, SubTitle } from "./styles";

const TextBox = ({ score }) => (
  <Container>
    <Title>Olá, Carlos! Estamos felizes por você ter chegado até aqui.</Title>
    {!score && (
      <SubTitle>
        Conta pra gente, numa escala de 0 a 10, o quanto você indicaria nossos
        serviços a um amigo ou familiar.
      </SubTitle>
    )}
  </Container>
);

export default TextBox;
