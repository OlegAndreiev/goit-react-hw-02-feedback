import React from 'react';
import css from './FeedbackWidget.module.css';

const Section = ({ title, children }) => (
  <section className={css.title}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
