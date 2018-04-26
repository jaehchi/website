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
      reacthover: false
    }

    this.onHover = this.onHover.bind(this);
  }

  onHover(e) {
    e.preventDefault();
    console.log(e.target.id)

    this.setState({
      [ e.target.id ]:  true
    })

    console.log(this.state)
  }

  onHoverLeave (e){
    this.setState({
      [ e.target.id ]: false
    })
  }

  render() {

    console.log(this.state)
    return (
      <div className="skills-wrapper" name="skills" id="skills">
        <div className="container">
          <div className="skills-content">
            <div>
              {!this.state.reacthover ? <img src={reactlogo} id="reacthover" onMouseLeave={this.onHoverLeave.bind(this)} onMouseOver={this.onHover} /> :
                <div className="" >
                  <ChangingProgressbar

                    percentages={[ 0, 55 ]}
                    stylesForPercentage={(percentage) => {
                      const alpha = (100 + percentage) / 200;
                      return {
                        path: {
                          stroke: `rgba(62, 152, 199, ${alpha})`,
                        },
                      };
                    }}
                  />

                </div>
              }

            </div>




          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

