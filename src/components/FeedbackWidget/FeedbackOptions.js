import React from 'react';
import css from './FeedbackWidget.module.css';
const FeedbackOptions = ({
  incrementBtnGood,
  incrementBtnNeutral,
  incrementBtnBad,
}) => (
  <section>
    <button type="button" className={css.button} onClick={incrementBtnGood}>
      Good
    </button>
    <button type="button" className={css.button} onClick={incrementBtnNeutral}>
      Neutral
    </button>
    <button type="button" className={css.button} onClick={incrementBtnBad}>
      Bad
    </button>
  </section>
);

export default FeedbackOptions;
