import React, { Component } from 'react';

import cits from '../../../public/images/cits.png';
import codesling from '../../../public/images/codesling.png';
import bonebuds from '../../../public/images/bonebuds.png';
import rps from '../../../public/images/rps.png';
import tictactoe from '../../../public/images/tictactoe.png';
import website from '../../../public/images/logo.png';

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
          <div className="portfolio-grid-item cits">
            <img src={cits} alt=""/>
            <div className="project-hover">
              <h4>cits.io</h4>
              <a href="http://bit.ly/2GmmyEI" target="_blank">View Project</a>
              <a href="https://github.com/thepicklefamily" target="_blank">View Code</a>
            </div>
          </div>
          <div className="portfolio-grid-item codesling">
            <img src={codesling} alt=""/>
            <div className="project-hover">
              <h4>codesling.io</h4>
              <a href="https://github.com/slyvanae" target="_blank">View Code</a>
            </div>
          </div>
          <div className="portfolio-grid-item bonebuds">
            <img src={bonebuds} alt=""/>
            <div className="project-hover">
              <h4>BoneBuds</h4>
              <a href="https://github.com/DangerDogs/BoneBuds" target="_blank">View Code</a>
            </div>
          </div>
          <div className="portfolio-grid-item rps">
            <img src={rps} alt=""/>
            <div className="project-hover">
              <h4>rps</h4>
              <a href="https://github.com/jaehchi/rps" target="_blank">View Code</a>
            </div>
          </div>
          <div className="portfolio-grid-item tictactoe">
            <img src={tictactoe} alt=""/>
            <div className="project-hover">
              <h4>tic-tac-toe</h4>
              <a href="https://github.com/jaehchi/ticTacToe" target="_blank">View Code</a>
            </div>
          </div>
          <div className="portfolio-grid-item website">
            <img src={website} alt=""/>
            <div className="project-hover">
              <h4>Website</h4>
              <div className="current">
                <a>Currently Viewing</a>
              </div>
              <a href="https://github.com/jaehchi/website" target="_blank">View Code</a>
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}

export default Portfolio;
