import React from 'react';
import './FeedbackOptions.css';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className="FeedbackBtn">
          {option}
        </button>
      ))}
    </div>
  );
}
