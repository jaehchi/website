import React, { Component } from 'react';

import logo from './logo.png';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      nav: null,
      topOfNav: null,
      active: null,
    }

    this.active = this.active.bind(this);
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

  active (e) {
    e.preventDefault();

    !this.state.active ? 
    (
      e.target.className = 'active',
      this.state.active = e.target
    ) : 
    (
      this.state.active.className = '',
      e.target.className = 'active',
      this.state.active = e.target
    )
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
                    <a href="" name="about" onClick={this.active}>About Me</a>
                  </li>
                  <li>
                    <a href="" name="portfolio" onClick={this.active}>Portfolio</a>
                  </li>
                  <li>
                    <a href="" name="tech" onClick={this.active}>Tech</a>
                  </li>
                  <li>
                    <a href="" name="contact" onClick={this.active}>Contact Me</a>
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