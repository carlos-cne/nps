import React from "react";
import { FormattedMessage } from "react-intl";

import { Container, Title, SubTitle } from "./styles";

const TextBox = ({ score }) => (
  <Container>
    <Title>
      <FormattedMessage id="title" />
    </Title>
    {!score && (
      <SubTitle>
        <FormattedMessage id="subtitle" />
      </SubTitle>
    )}
  </Container>
);

export default TextBox;
