import React, { Component } from 'react';

import './about.scss';

import jae from '../../../public/images/jae.png';
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
            <img src={jae} alt="" className="" />
          </div>
          <div className="description">
            <div className="about-speech">
              <div className="about-bubble">
                <h1>Hey, I'm Jae. Nice to meet you!</h1>
              </div>
            </div>
            <p>
              I am a software engineer, based in southern California, who is passionate about solving problems that will, one day, change the world. I always been drawn to the excitement of learning something new or the fulfillment of overcoming a difficult challenge. And nothing compares to that feeling. I am modestly confident, insatiably curious, and always continuing to improve not only, as a person, but also as a software engineer.
            </p>
          </div>
        </div>

        <div className="photo-grid">
          <div className="photo-grid-items">
            <img src={gravy} alt="" className="" />
          </div>
          <div className="photo-grid-items">
            <img src={hiking} alt="" className="" />
          </div>
          <div className="photo-grid-items">
            <img src={beach} alt="" className="" />
          </div>
          <div className="photo-grid-items">
            <img src={meandyou} alt="" className="" />
          </div>
          <div className="photo-grid-items">
            <img src={guitar} alt="" className="" />
          </div>
          <div className="photo-grid-items">
            <img src={snowboarding} alt="" className="" />
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-me">
            <h1>Why I love Coding</h1>
          </div>
          <div className="about-me-description">
            <ol>
              <li>
                <p>
                  <em>The Happiness of Making Things. </em>
                  Remember the joy of building anything from your imagination with legos? The smirk on your face when you look at your lego structure, thinking to yourself, I built that. Programming brings me back to that feeling.
                </p>
              </li>
              <li>
                <em>The Pleasure of Making a Difference. </em>
                Fundamentally, the goal of programming is finding solutions for problems. It is satisfying to know that your code could be used by thousands, even millions, and impact their lives for the better.
              </li>
              <li>
                <em>The Fascination with a Puzzle and it's Interactive Parts. </em>
                It is fascinating to see individual pieces, working together in subtle ways, and seeing the outcome.
              </li>
              <li>
                <em>The Joy of Teamwork. </em>
                Being a part of a team is one of the greatest highs in the world, especially if the goals of the team is worthwhile. It gives a sense of belonging, and usually, you come out a stronger and better person.
              </li>
              <li>
                <em>A Growth with No Limit. </em>
                With programming, the sky is literally the limit. Anything I can think of, I can make it. It doesn't get stale either. There are always something new to learn. And if you learned everything, there are infinite solutions to a problem. It's endless.
              </li>

            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default About;







