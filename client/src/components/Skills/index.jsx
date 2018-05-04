import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import CircularProgressbar from 'react-circular-progressbar';
import ChangingProgressbar from './ChangingProgressbar';
import 'react-circular-progressbar/dist/styles.css';


import react from '../../../public/images/react.svg';
import angular from '../../../public/images/angular.svg';
import css3 from '../../../public/images/css3.svg';
import git from '../../../public/images/git.svg';
import html5 from '../../../public/images/html5.svg';
import sass from '../../../public/images/sass.svg';
import javascript from '../../../public/images/javascript.svg';
import mongodb from '../../../public/images/mongodb.svg';
import postgresql from '../../../public/images/postgresql.svg';
import nodejs from '../../../public/images/nodejs.svg';
import redux from '../../../public/images/redux.svg';
import webpack from '../../../public/images/webpack.svg';

import './skills.scss';


class Skills extends Component {
  constructor(props) {
    super(props);


    this.state = {
      javascript: false,
      react: false,
      redux: false,
      angular: false,
      webpack: false,
      css3: false,
      html5: false,
      sass: false,
      nodejs: false,
      postgresql: false,
      mongodb: false,
      git: false,
    }

    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  onHover(target) {
    this.setState({
      [ target ]: true
    })
  }

  onHoverLeave(target) {
    this.setState({
      [ target ]: false
    })
  }

  render() {

    return (
      <div className="skills section" name="skills" id="skills">
        <div className="skills-content">
          <div className="title-skills">
            <h1>Technical Skills</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="tech-grid" >
          <div
            className='tech-grid-item'
            onMouseLeave={() => this.onHoverLeave('javascript')}
            onMouseEnter={() => this.onHover('javascript')}
          >
            {
              !this.state.javascript ?
                <img src={javascript} /> :
                <ChangingProgressbar
                  percentages={[ 0, 60 ]}
                  value="javascript"
                  background
                />
            }
          </div>
          <div
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('react')} 
            onMouseEnter={() => this.onHover('react')}
          >
            {
              !this.state.react ?
                <img src={react} /> :
                <ChangingProgressbar
                  percentages={[ 0, 77 ]}
                  value="react"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('redux')} 
            onMouseEnter={() => this.onHover('redux')}
          >
            {
              !this.state.redux ?
                <img src={redux} /> :
                <ChangingProgressbar
                  percentages={[ 0, 50 ]}
                  value="redux"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('angular')} 
            onMouseEnter={() => this.onHover('angular')}
          >
            {
              !this.state.angular ?
                <img src={angular} /> :
                <ChangingProgressbar
                  percentages={[ 0, 53 ]}
                  value="angular"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('webpack')} 
            onMouseEnter={() => this.onHover('webpack')}
          >
            {
              !this.state.webpack ?
                <img src={webpack} /> :
                <ChangingProgressbar
                  percentages={[ 0, 67 ]}
                  value="webpack"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('css3')} 
            onMouseEnter={() => this.onHover('css3')}
          >
            {
              !this.state.css3 ?
                <img src={css3} /> :
                <ChangingProgressbar
                  percentages={[ 0, 65 ]}
                  value="css3"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('html5')} 
            onMouseEnter={() => this.onHover('html5')}
          >
            {
              !this.state.html5 ?
                <img src={html5} /> :
                <ChangingProgressbar
                  percentages={[ 0, 71 ]}
                  value="html5"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('sass')} 
            onMouseEnter={() => this.onHover('sass')}
          >
            {
              !this.state.sass ?
                <img src={sass} /> :
                <ChangingProgressbar
                  percentages={[ 0, 47 ]}
                  value="sass"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('nodejs')} 
            onMouseEnter={() => this.onHover('nodejs')}
          >
            {
              !this.state.nodejs ?
                <img src={nodejs} /> :
                <ChangingProgressbar
                  percentages={[ 0, 62 ]}
                  value="nodejs"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('postgresql')} 
            onMouseEnter={() => this.onHover('postgresql')}
          >
            {
              !this.state.postgresql ?
                <img src={postgresql} /> :
                <ChangingProgressbar
                  percentages={[ 0, 52 ]}
                  value="postgresql"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('mongodb')} 
            onMouseEnter={() => this.onHover('mongodb')}
          >
            {
              !this.state.mongodb ?
                <img src={mongodb} /> :
                <ChangingProgressbar
                  percentages={[ 0, 51 ]}
                  value="mongodb"
                  background
                />
            }
          </div>
          <div 
            className='tech-grid-item' 
            onMouseLeave={() => this.onHoverLeave('git')} 
            onMouseEnter={() => this.onHover('git')}
          >
            {
              !this.state.git ?
                <img src={git} /> :
                <ChangingProgressbar
                  percentages={[ 0, 78 ]}
                  value="git"
                  background
                />
            }
          </div>

        </div>
      </div>
    );
  }
}

export default Skills;



// <div className="container">
// <div className="skills-content">
//   <div   onMouseLeave={() => this.onHoverLeave('react')}  onMouseEnter={ () => this.onHover('react')}>
//     {
//       !this.state.react ?  <img src={reactlogo} /> : 

//       <ChangingProgressbar
//       percentages={[0, 20, 40, 60, 80, 100]}
//       value="react" 
//       stylesForPercentage={(percentage) => {
//         const alpha = (100 + percentage) / 200;
//         return {
//           path: {
//             stroke: `rgba(62, 152, 199, ${alpha})`,
//           },
//         };
//       }}
//     />
//     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//     <div style={{ position: 'absolute', width: '100%' }}>
//       <CircularProgressbar
//         percentage={50}
//         textForPercentage={null}
//       />
//     </div>
//     <div style={{ width: '80%', padding: '10%' }}>
//       <img style={{ width: '100%' }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
//     </div>
//   </div>
//     }

//   </div>
// </div>
// </div> 