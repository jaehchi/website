import React, { Component } from 'react';

import About from './About';

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