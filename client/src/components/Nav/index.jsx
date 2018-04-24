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
      activeElem: null,
      activeElemClasses: null,
    }

    this.isActive = this.isActive.bind(this);
    this.getCurrentElement = this.getCurrentElement.bind(this)
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
      // const element = document.querySelector('#about');
      // const elem = document.querySelector('#portfolio');


      //   var rect = element.getBoundingClientRect();
      //   var elemTop = rect.top;
      //   var elemBottom = rect.bottom;

      //   const aboutTop = 648;
      //   const reachesBot = -604;

      //   const YatBot = 1252;

      // console.log('window Y: ', window.scrollY);
      // console.log(elemTop)
      // console.log( aboutTop <= window.scrollY && window.scrollY <= YatBot);
        // Only completely visible elements return true:
        // var isVisible = (elemTop >= 0) && (elemBottom >= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        // return isVisible;
    
    
    // console.log(element);
    // console.log(isScrolledIntoView(element));

  }

  getCurrentElement(elem) {

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
    // e.preventDefault(); 
    // e.stopPropangation();
    // let elem = e.target.getAttribute('href');
    // let currentElem = eleme.slice( 1, element.length );

    // const activeElement = document.getElementById(elem);

  

    // activeElement.className += ' activated';

    // console.log(activeElement.className)

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

                <div className="nav-logo">
                  <a href="#" onClick={this.isActive}><img src={logo} /></a>
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