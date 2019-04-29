import React, { Component, Fragment } from "react";

import GlobalStyle from "./styles/global";
import { Container, NPSContainer } from "./styles";

import BoxScore from "./components/BoxScore";
import Header from "./components/Header";
import TextBox from "./components/TextBox";
import Feedback from "./components/Feedback";

export default class App extends Component {
  state = {
    score: null,
    confirmFeedback: false
  };

  handleClickScore = score => {
    this.setState({ score });
  };

  handleClickConfirmFeedback = () => {
    //Receberia aqui o texto digitado pelo clinte para enviar a algum lugar.
    this.setState({ confirmFeedback: true });
  };

  handleClickCancel = () => {
    // Volto para a seleção de score
    this.setState({ score: null });
  };

  render() {
    const { score, confirmFeedback } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <Container className="app">
          <Header title="Teste Tracksale" />
          <NPSContainer>
            {score > 7 || confirmFeedback ? (
              <Feedback />
            ) : (
              <Fragment>
                <TextBox score={score} />
                <BoxScore
                  handleClickCancel={() => this.handleClickCancel()}
                  handleClickConfirmFeedback={() =>
                    this.handleClickConfirmFeedback()
                  }
                  handleClickScore={score => this.handleClickScore(score)}
                  score={score}
                />
              </Fragment>
            )}
          </NPSContainer>
        </Container>
      </Fragment>
    );
  }
}
