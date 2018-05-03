import React, { Component } from 'react';
import 'smoothscroll';

import logo from '../../../public/images/logo.png';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      nav: null,
      topOfNav: null,
      active: null,
    }

    this.isActive = this.isActive.bind(this);
  }

  componentDidMount() {
    this.getNav();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {

    window.scrollY >= this.state.topOfNav ?
      (
        document.body.style.paddingTop = `${this.state.paddingOffset}px`,
        this.state.nav.classList.add('sticky')
      ) :
      (
        document.body.style.paddingTop = 0,
        this.state.nav.classList.remove('sticky')
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

  isActive(e) {
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
      <div className="navigation" id="navbar">

        <div className="nav-logo">
          <a href="#header" onClick={this.isActive}><img src={logo} /></a>
        </div>
        
        <ul className="navbar">
          <li>
            <a href="#about" onClick={this.isActive}>About Me</a>
          </li>
          <li>
            <a href="#skills" onClick={this.isActive}>Skills</a>
          </li>
          <li>
            <a href="#portfolio" onClick={this.isActive}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={this.isActive}>Contact Me</a>
          </li>
        </ul>

      </div>
    )
  }
}

export default Nav;