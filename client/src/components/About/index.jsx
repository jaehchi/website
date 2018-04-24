import React, { Component } from 'react';

import './about.scss';
import bg from './about-bg.jpg';

import lakeMorraine from './jae.jpg'


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // excuse my ugly faces, im that talented
    return (
      <div className="about-wrapper" name="about" id="about" >
        <div className="about-container funfacts">
          <div className="about-funfacts">

            <div className="about-heading funfacts">
              <h1><span className="line-center-funfacts">Fun Facts</span></h1>
            </div>

            <div className="funfacts-content">
              
                I love mangoes, Ramen... `Nuff said, I have a dog named Gravy, Wubba lubba dub dub, My favorite number is five, I play games like its my life, and Gordan Ramsey is my hero.

            
            </div>
          </div>
        </div>


        <div className="about-container">
          <div className="about-me">
            <div className="about-heading about-me">
              <h1><span className="line-center-about-me">About me</span></h1>
            </div>

            <div className="container about-me-content">
              <div className="about-me-text">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
              <div className="about-me-text">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
        </div>
 
        <div className="about-container hobbies">
          <div className="about-hobbies">
            <div className="about-heading hobbies">
              <h1><span className="line-center-hobbies">a little peek into my life</span></h1>
            </div>
          </div>
        </div>
        <div className="about-photos">
          <div className="asdf">
            <img src={bg} alt=""/>
            <img src={lakeMorraine} alt=""/>
            <img src={bg} alt=""/>

          </div>
          <div className="asdf">
            <img src={bg} alt=""/>
            <img src={bg} alt=""/>
            <img src={bg} alt=""/>

          </div>
        </div>
      </div>
    );
  }
}

export default About;



