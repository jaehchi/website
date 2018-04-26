import React, { Component } from 'react';

import './about.scss';


import hiking from '../../../public/images/hiking.jpg';
import christmas from '../../../public/images/christmas.jpg';
import gravy from '../../../public/images/gravy.jpg';
import gravy2 from '../../../public/images/gravy2.jpg';
import icecream from '../../../public/images/icecream.jpg';
import snowboarding from '../../../public/images/snowboarding.jpg';
import beach from '../../../public/images/beach.jpg';
import meandyou from '../../../public/images/meandyou.jpg';


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // excuse my ugly faces, im that talented
    return (
      <div className="about-wrapper" name="about" id="about" >
        <div className="about-container">
          <div className="about-me">
            <div className="about-heading about-me">
              <h1><span className="line-center-about-me">About me</span></h1>
            </div>

            <div className="container about-me-content">
              <div className="about-me-profile">
                <img src={gravy} alt="" className=""/>
              </div>
              <div className="about-me-text">
                <p>I'm a software engineer with a burning passion for problem-solving. Of all the things in this world, nothing satisfies me more than making progress in meaningful work that one day can change the world. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrapper">
          <div className="about-container about-hobbies">
            <div className="about-heading hobbies">
              <h1><span className="line-center-hobbies">a little peek</span></h1>
            </div>
          </div>

          <div className="about-photos">
            <div className="image-tint">
              <img src={gravy}/>
            </div>
            <div className="image-tint">
              <img src={hiking}/>
            </div>
            <div className="image-tint">
              <img src={christmas}/>
            </div>
            <div className="image-tint">
              <img src={beach}/>
            </div>
            <div className="image-tint">
              <img src={snowboarding}/>
            </div>
            <div className="image-tint">
              <img src={meandyou}/>
            </div>
            <div className="image-tint">
              <img src={gravy2}/>
            </div>
            <div className="image-tint">
              <img src={icecream}/>
            </div>    
          </div>
      </div>

      </div>
    );
  }
}

export default About;



