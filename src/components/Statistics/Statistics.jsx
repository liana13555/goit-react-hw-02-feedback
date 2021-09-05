import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Container>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </Container>
  );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
