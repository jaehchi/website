import React, { Component } from 'react';

import './portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio section" name="portfolio" id="portfolio">
        <div className="portfolio-content">
          <div className="title-portfolio">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-grid-item">
          hey
          </div>
          <div className="portfolio-grid-item">
          hey
          </div>
          <div className="portfolio-grid-item">
          hey
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
