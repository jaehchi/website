import React, { Component } from 'react';

import './about.scss';

import hiking from '../../../public/images/hiking.jpg';
import guitar from '../../../public/images/guitar.jpg';
import gravy from '../../../public/images/gravy.jpg';
import snowboarding from '../../../public/images/snowboarding.jpg';
import beach from '../../../public/images/beach.jpg';
import meandyou from '../../../public/images/meandyou.jpg';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="about section" name="about" id="about" >
        <div className="about-profile">
          <div className="profile-image">
            <img src={gravy} alt="" className=""/>
          </div>
          <div className="description">
            <div className="about-title">
              <h1>About Me</h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="photo-grid">
          <div className="photo-grid-items">
            <img src={gravy} alt="" className=""/>
          </div>
          <div className="photo-grid-items">
            <img src={hiking} alt="" className=""/>
          </div>
          <div className="photo-grid-items">
            <img src={beach} alt="" className=""/>
          </div>
          <div className="photo-grid-items">
            <img src={meandyou} alt="" className=""/>
          </div>
          <div className="photo-grid-items">
            <img src={guitar} alt="" className=""/>
          </div>
          <div className="photo-grid-items">
            <img src={snowboarding} alt="" className=""/>
          </div>

        </div>
        <div className="about-content">
          <div className="about-me">
            <h1>Understand Who I am</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default About;







