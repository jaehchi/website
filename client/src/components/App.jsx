import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <About/>
        {/* <Skills/>
        <Portfolio/>
        <Contact/> */}
        <Footer/>
      
      </div>
    );
  }
}

export default App; 