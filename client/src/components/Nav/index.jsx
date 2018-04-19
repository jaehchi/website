import React, { Component } from 'react';

import './nav.scss';
import logo from './logo.png';

class Nav extends Component {
  constructor() {
    super()

  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  handleScroll (e) {
    
  }

  render () {

    return (
      <div className="navigation-wrapper">
        <div className="navigation container">
          <nav>
            <div className="container">

              <div className="nav-menu">
                <ul className="nav navbar navbar-right">
                  <li>
                    <a href="">About Me</a>
                  </li>
                  <li>
                    <a href="">Portfolio</a>
                  </li>
                  <li>
                    <a href="">Tech</a>
                  </li>
                  <li>
                    <a href="">Contact Me</a>
                  </li>
                </ul>

                <div className="nav-logo">
                  <a href=""><img src={logo}/></a>
                </div>
              </div>

            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Nav;