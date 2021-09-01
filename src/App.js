import React, { Component } from 'react';
import Feedback from './Feedback';

class App extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Feedback />

        <h1>Statistics</h1>

        <div>
          <p>Good: {}</p>
          <p>Neutral: {}</p>
          <p>Bad: {}</p>
          <p>Total: {}</p>
          <p>Positive feedback: {}</p>
        </div>
      </>
    );
  }
}

export default App;
