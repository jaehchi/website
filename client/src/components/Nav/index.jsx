import React, { Component } from 'react';

import './nav.scss';
import logo from './logo.png';

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      nav: null,
      topOfNav: null,
    }

  }

  componentDidMount() {
    this.getNav();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {

    window.scrollY >= this.state.topOfNav ?
      (
        document.body.style.paddingTop = `${this.state.paddingOffset}px`,
        this.state.nav.classList.add('sticky-nav')
      ) :
      (
        document.body.style.paddingTop = 0,
        this.state.nav.classList.remove('sticky-nav')
      )

  }

  getNav() {

    const nav = document.querySelector('#navbar');

    this.setState({
      nav,
      topOfNav: nav.offsetTop,
      paddingOffset: nav.offsetHeight
    });

  }


  render() {

    return (
      <div className="navigation-wrapper" id="navbar">
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
                  <a href=""><img src={logo} /></a>
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