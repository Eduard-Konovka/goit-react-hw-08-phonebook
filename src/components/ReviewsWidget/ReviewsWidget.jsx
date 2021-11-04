import { Component } from 'react'
// import PropTypes from 'prop-types'
import Buttons from '../Buttons';
import s from './ReviewsWidget.module.css';

export default class ReviewsWidget extends Component {
  // static propTypes = {
  //   type: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  setStatistics = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  render() {
    const {good, neutral, bad} = this.state
    return (
      <>
        <div className={s.box}>
          <h3 className={s.title}>Please leave feedback</h3>
          <Buttons options={['good', 'neutral', 'bad']} onLeaveFeedback={this.setStatistics} />
        </div>

        <div className={s.box}>
          <h3 className={s.title}>Statistics</h3>
          <p className={s.category}>Good: {good} </p>
          <p className={s.category}>Neutral: {neutral}</p>
          <p className={s.category}>Bad: {bad}</p>
        </div>
      </>
    )
  }
}
