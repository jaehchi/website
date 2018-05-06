import React, { Component } from 'react';

import CircularProgressbar from 'react-circular-progressbar';

class ChangingProgressbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPercentageIndex: 0,
    };

    this.getCurrentPercentage = this.getCurrentPercentage.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.progress = setInterval(() => {
      this.setState({
        currentPercentageIndex: (this.state.currentPercentageIndex + 1) % this.props.percentages.length
      });
    }, this.props.interval);

    this.setState({
      currentPercentageIndex: (this.state.currentPercentageIndex + 1 ) % this.props.percentages.length
    })
  }

  componentWillUnmount () {
    clearInterval(this.progress);
  }

  getStyles() {
    return this.props.stylesForPercentage ? (
      this.props.stylesForPercentage(this.getCurrentPercentage())
    ) : {};
  }

  getCurrentPercentage() {
    return this.props.percentages[this.state.currentPercentageIndex];
  }

  render() {
    return (
      <CircularProgressbar
        {...this.props}
        percentage={this.getCurrentPercentage()}
        styles={this.getStyles()}
      />
    );
  }
}

ChangingProgressbar.defaultProps = {
  interval: 1000,
};

export default ChangingProgressbar;