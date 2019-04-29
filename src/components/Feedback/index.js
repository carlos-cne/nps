import React from "react";

import { Container, FeedbackMessage } from "./styles";
import checkedIcon from "../../assets/icons8-checkmark.svg";

const Feedback = () => (
  <Container>
    <FeedbackMessage>
      <img src={checkedIcon} alt="feedback icon" />
      <p>Obrigado, Carlos!</p>
    </FeedbackMessage>
  </Container>
);

export default Feedback;
