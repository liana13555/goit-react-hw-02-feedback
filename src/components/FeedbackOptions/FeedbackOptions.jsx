import React from 'react';
import { Container, FeedbackBtn } from './FeedbackOptions.styled.jsx';
import PropTypes from 'prop-types';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(option => (
        <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackBtn>
      ))}
    </Container>
  );
}

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}