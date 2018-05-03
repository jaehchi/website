import React, { Component } from 'react';
import { each } from 'lodash';
import 'smoothscroll';

import logo from '../../../public/images/logo.png';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      nav: null,
      navList: null,
      topOfNav: null,
      paddingOffset: null,
      sections: null,
    }

    this.getNav = this.getNav.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  componentDidMount() {
    this.getNav();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {

    window.scrollY >= this.state.topOfNav ?
      (
        // document.body.style.paddingTop = `${this.state.paddingOffset}px`,
        this.state.nav.classList.add('sticky')
      ) :
      (
        // document.body.style.paddingTop = 0,
        this.state.nav.classList.remove('sticky')
      )
      
    this.isActive();
  }

  getNav() {
    const nav = document.querySelector('#nagivation');
    const sections = document.getElementsByClassName('section');
    const navList = {};

    let temp = document.getElementsByClassName('navbar')[0].childNodes;
    
    for ( var i = 0; i < temp.length; i++ ) {
      let item = temp[i].children[0].attributes[0].value.slice(1);
      if ( navList[item] === undefined ) {
        navList[item] = temp[i].children[0]
      }
    }
    
    this.setState({
      nav,
      navList,
      sections,
      topOfNav: nav.offsetTop,
      // paddingOffset: nav.offsetHeight
    });
  }

  isActive () {
    each( this.state.sections, section => {
      console.log(window.scrollY,  section.offsetTop, section.offsetHeight + section.offsetTop)
      if ( window.scrollY >= section.offsetTop && window.scrollY < section.offsetHeight + section.offsetTop ) {
        this.state.navList[section.getAttribute('name')].classList.add('active')
      } else {
        this.state.navList[section.getAttribute('name')].classList.remove('active')
      }
    });
  }


  render() {
    return (
      <div className="navigation" id="nagivation">

        <div className="nav-logo">
          <a href="#header"><img src={logo} /></a>
        </div>
        
        <ul className="navbar">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

      </div>
    )
  }
}

export default Nav;