import React from "react";
import { FormattedMessage } from "react-intl";

import { Container, FeedbackMessage } from "./styles";
import checkedIcon from "../../assets/icons8-checkmark.svg";

const Feedback = () => (
  <Container>
    <FeedbackMessage>
      <img src={checkedIcon} alt="feedback icon" />
      <p>
        <FormattedMessage id="thanksMessage" />
      </p>
    </FeedbackMessage>
  </Container>
);

export default Feedback;
