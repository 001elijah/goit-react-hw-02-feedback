import { Component } from "react";

class App extends Component {
  static state = {
    good: 0,
    neutral: 0,
    bad: 0
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
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button><br />
          <h2>Statistics</h2>
          <span>Good: </span><span>0</span><br />
          <span>Neutral: </span><span>0</span><br />
          <span>Bad: </span><span>0</span>
        </section>
      </>
    );
  };
};

export default App;