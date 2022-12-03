import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';

const Section = ({ title, children }) => (
  <section className={css.title}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
