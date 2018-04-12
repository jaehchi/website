import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import About from './About';
import Tech from './Tech';
import Porfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title">
        hello from REACT!!
        <About/>
      </div>
    );
  }
}

export default App; 