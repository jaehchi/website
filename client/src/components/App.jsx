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

    // this.state = {
    //   isLoading: true
    // }
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false,
  //     })
  //   }, 500);
  // }

  render() {
    // if (this.state.isLoading ) {
    //   return null;
    // }
    return (
      <div className="page">
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App; 

{/* <div class="loader">
<div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>
</div> */}