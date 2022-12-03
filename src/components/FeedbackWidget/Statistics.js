import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total !== 0 && (
    <section className={css.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {good > 0 ? positivePercentage + '%' : 0 + '%'}
      </p>
    </section>
  );

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
