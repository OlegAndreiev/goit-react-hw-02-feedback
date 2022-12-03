import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

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
    const countTotalFeedback =
      this.props.totalFeedback +
      this.state.good +
      this.state.neutral +
      this.state.bad;

    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            incrementBtnGood={this.incrementBtnGood}
            incrementBtnNeutral={this.incrementBtnNeutral}
            incrementBtnBad={this.incrementBtnBad}
          />
        </Section>
        <Section title="Statitstics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
        <Notification
          message="There is no feedback"
          total={countTotalFeedback}
        />
      </>
    );
  }
}

export default FeedbackWidget;
