import { Component } from "react";

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleGoodCommentIncrement = () => {
    this.setState((prevState) => ({ good: prevState.good + 1}));
  };

  handleBadCommentIncrement = () => {
    this.setState({ bad: this.state.bad + 1});
  };
  
  handleNeutralCommentIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1});
  };
  
  countTotalFeedback() {

  };

  countPositiveFeedbackPercentage() {

  };

  render() {
    return (
      <>
        <section>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleGoodCommentIncrement}>Good</button>
          <button type="button" onClick={this.handleNeutralCommentIncrement}>Neutral</button>
          <button type="button" onClick={this.handleBadCommentIncrement}>Bad</button><br />
          <h2>Statistics</h2>
          <span>Good: </span><span>{this.state.good}</span><br />
          <span>Neutral: </span><span>{this.state.neutral}</span><br />
          <span>Bad: </span><span>{this.state.bad}</span>
        </section>
      </>
    );
  };
};

export default App;