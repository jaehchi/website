import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import CircularProgressbar from 'react-circular-progressbar';
import ChangingProgressbar from './asdf';
import 'react-circular-progressbar/dist/styles.css';


import reactlogo from '../../../public/images/react.svg';

import './skills.scss';
import { ENGINE_METHOD_DIGESTS } from 'constants';

class Skills extends Component {
  constructor(props) {
    super(props);


    this.state = {
      react: false
    }

    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  onHover(target) {
    this.setState({
      [target]: true
    })
  }

  onHoverLeave (target){
    this.setState({
      [target]: false
    })
  }

  render() {

    return (
      <div className="section asdf" name="skills" id="skills">
        {/* <div className="container">
          <div className="skills-content">
            <div   onMouseLeave={() => this.onHoverLeave('react')}  onMouseEnter={ () => this.onHover('react')}>
              {
                !this.state.react ?  <img src={reactlogo} /> : 
                
                <ChangingProgressbar
                percentages={[0, 20, 40, 60, 80, 100]}
                value="react" 
                stylesForPercentage={(percentage) => {
                  const alpha = (100 + percentage) / 200;
                  return {
                    path: {
                      stroke: `rgba(62, 152, 199, ${alpha})`,
                    },
                  };
                }}
              />
              }
            
            </div>
          </div>
        </div> */}
        HEY
      </div>
    );
  }
}

export default Skills;

