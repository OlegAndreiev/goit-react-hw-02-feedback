import React from 'react';
import css from './FeedbackWidget.module.css';
const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <section className={css.statistics}>
    <h2>{title}</h2>

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
