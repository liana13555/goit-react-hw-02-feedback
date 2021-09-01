import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={Object.keys(this.state)} />

        <h1>Statistics</h1>
        <Statistics />
      </>
    );
  }
}

export default App;
