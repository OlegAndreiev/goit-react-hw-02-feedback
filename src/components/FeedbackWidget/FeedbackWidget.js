// import { App } from 'components/App';
import React from 'react';
import css from './FeedbackWidget.module.css';

class FeedbackWidget extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    console.log(this.state);
  };

  incrementBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  incrementBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  incrementBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <section className={css.title}>
          <h2>Please leave feedback</h2>
          <button
            type="button"
            className={css.button}
            onClick={this.incrementBtnGood}
          >
            Good
          </button>
          <button
            type="button"
            className={css.button}
            onClick={this.incrementBtnNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.button}
            onClick={this.incrementBtnBad}
          >
            Bad
          </button>
        </section>
        <section className={css.statistics}>
          <h2>Statitstics</h2>

          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.props.totalFeedback}</p>
        </section>
      </div>
    );
  }
}

export default FeedbackWidget;
