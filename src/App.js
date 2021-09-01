import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

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

  countTotalFeedback() {
    const totalValue = Object.values(this.state);
    return totalValue.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalValue = Object.values(this.state);
    const totalFeedback = totalValue.reduce((acc, value) => acc + value, 0);
    return Math.round(good / totalFeedback) * 100;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} />

        <h1>Statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
