import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { intlShape, injectIntl } from "react-intl";

import {
  Container,
  Box,
  CustumerFeedback,
  CustumerFeedbackContainer,
  ButtonContainer,
  Button
} from "./styles";

class BoxScore extends Component {
  static propTypes = {
    intl: intlShape.isRequired
  };

  state = {
    box: []
  };

  handleClickScore = score => {
    this.props.handleClickScore(score);
  };

  handleClickConfirm = () => {
    this.props.handleClickConfirmFeedback();
  };

  handleClickCancel = () => {
    this.props.handleClickCancel();
  };

  componentDidMount = () => {
    const { box } = this.state;
    for (let i = 0; i <= 10; i++) {
      box.push(i);
    }
    this.setState({ box });
  };

  componentDidUpdate() {
    if (document.getElementById("custumer_feedback")) {
      document.getElementById("custumer_feedback").focus();
    }
  }

  boxScore = () => {
    const { box } = this.state;
    return box.map(item => (
      <Box key={item} onClick={() => this.handleClickScore(item)}>
        {item}
      </Box>
    ));
  };

  render() {
    const intl = this.props.intl;
    const placeholder = intl.formatMessage({
      id: "feedbackPlaceholder"
    });
    const { score } = this.props;
    if (typeof score !== "number")
      return <Container>{this.boxScore()}</Container>;
    else if (score <= 7) {
      return (
        <CustumerFeedbackContainer>
          <CustumerFeedback id="custumer_feedback" placeholder={placeholder} />
          <ButtonContainer>
            <Button primary onClick={() => this.handleClickConfirm()}>
              <FormattedMessage id="buttonConfirm" />
            </Button>
            <Button onClick={() => this.handleClickCancel()}>
              <FormattedMessage id="buttonCancel" />
            </Button>
          </ButtonContainer>
        </CustumerFeedbackContainer>
      );
    }
  }
}

export default injectIntl(BoxScore);
