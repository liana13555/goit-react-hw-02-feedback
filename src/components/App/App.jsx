import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import SectionTitle from '../SectionTitle';
import Notification from '../Notification';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    good : 0,
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
    const value = this.countTotalFeedback();
    const positivePercentage = Math.round((this.state.good / value) * 100);
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const value = this.countTotalFeedback();


    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
           {value === 0 ? (
            <Notification message="No feedback given" />
          ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={value}
            positivePercentage={this.countPositiveFeedbackPercentage()}
              />
                )}
        </SectionTitle>
      </Container>
    );
  }
}