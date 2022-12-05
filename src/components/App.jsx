import React from 'react';
import FeedbackWidget from './FeedbackWidget';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <FeedbackWidget state={this.state} />
      </>
    );
  }
}

export default App;
