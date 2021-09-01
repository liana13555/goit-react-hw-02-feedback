import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
  render() {
    return (
      <div className="Feedback">
        <button className="FeedBack__button">Good</button>
        <button className="FeedBack__button">Neutral</button>
        <button className="FeedBack__button">Bad</button>
      </div>
    );
  }
}

export default Feedback;
