import React from 'react';
import './FeedbackOptions.css';

export default function FeedbackOption({ options }) {
  return (
    <div>
      {options.map(option => (
        <button key={option} className="FeedbackBtn">
          {option}
        </button>
      ))}
    </div>
  );
}
