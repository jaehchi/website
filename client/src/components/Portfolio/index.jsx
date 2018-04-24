import React, { Component } from 'react';

import './portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio-wrapper" name="portfolio" id="portfolio">
        Hey from Portfolio
      </div>
    );
  }
}

export default Portfolio;
