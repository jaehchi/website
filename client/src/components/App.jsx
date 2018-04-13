import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import About from './About';
import Tech from './Tech';
import Porfolio from './Portfolio';
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
        {/* <Nav/>
        <About/>
        <Tech/>
        <Portfolio/>
        <Footer/> */}
      </div>
    );
  }
}

export default App; 