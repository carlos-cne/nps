import React, { Component } from "react";

import {
  Container,
  Box,
  CustumerFeedback,
  CustumerFeedbackContainer,
  ButtonContainer,
  Button
} from "./styles";

export default class BoxScore extends Component {
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
    const { score } = this.props;
    if (typeof score !== "number")
      return <Container>{this.boxScore()}</Container>;
    else if (score <= 7) {
      return (
        <CustumerFeedbackContainer>
          <CustumerFeedback
            id="custumer_feedback"
            autofocus
            placeholder="Como podemos melhorar? (opcional)"
          />
          <ButtonContainer>
            <Button primary onClick={() => this.handleClickConfirm()}>
              Enviar
            </Button>
            <Button onClick={() => this.handleClickCancel()}>Cancelar</Button>
          </ButtonContainer>
        </CustumerFeedbackContainer>
      );
    }
  }
}
