import React, { Component } from 'react';

import Skill from './Skill';

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
          <div className="skills-description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          
          </div>
        </div>
        <div className="grid">
        
          <div className="tech-grid" >
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('javascript')}
              onMouseEnter={() => this.onHover('javascript')}
            >
              <Skill
                hovered={this.state.javascript}
                img={javascript}
                name={'javascript'}
                percentages={[ 0, 62 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('react')}
              onMouseEnter={() => this.onHover('react')}
            >
              <Skill
                hovered={this.state.react}
                img={react}
                name={'react'}
                percentages={[ 0, 77 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('redux')}
              onMouseEnter={() => this.onHover('redux')}
            >
              <Skill
                hovered={this.state.redux}
                img={redux}
                name={'redux'}
                percentages={[ 0, 51 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('angular')}
              onMouseEnter={() => this.onHover('angular')}
            >
              <Skill
                hovered={this.state.angular}
                img={angular}
                name={'angular'}
                percentages={[ 0, 53 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('webpack')}
              onMouseEnter={() => this.onHover('webpack')}
            >
              <Skill
                hovered={this.state.webpack}
                img={webpack}
                name={'webpack'}
                percentages={[ 0, 67 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('css3')}
              onMouseEnter={() => this.onHover('css3')}
            >
              <Skill
                hovered={this.state.css3}
                img={css3}
                name={'css3'}
                percentages={[ 0, 65 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('html5')}
              onMouseEnter={() => this.onHover('html5')}
            >
              <Skill
                hovered={this.state.html5}
                img={html5}
                name={'html5'}
                percentages={[ 0, 71 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('sass')}
              onMouseEnter={() => this.onHover('sass')}
            >
              <Skill
                hovered={this.state.sass}
                img={sass}
                name={'sass'}
                percentages={[ 0, 48 ]}
              />
            </div>
            <div
              className='tech-grid-item nodejs'
              onMouseLeave={() => this.onHoverLeave('nodejs')}
              onMouseEnter={() => this.onHover('nodejs')}
            >
              <Skill
                hovered={this.state.nodejs}
                img={nodejs}
                name={'nodejs'}
                percentages={[ 0, 63 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('postgresql')}
              onMouseEnter={() => this.onHover('postgresql')}
            >
              <Skill
                hovered={this.state.postgresql}
                img={postgresql}
                name={'postgresql'}
                percentages={[ 0, 52 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('mongodb')}
              onMouseEnter={() => this.onHover('mongodb')}
            >
              <Skill
                hovered={this.state.mongodb}
                img={mongodb}
                name={'mongodb'}
                percentages={[ 0, 51 ]}
              />
            </div>
            <div
              className='tech-grid-item'
              onMouseLeave={() => this.onHoverLeave('git')}
              onMouseEnter={() => this.onHover('git')}
            >
              <Skill
                hovered={this.state.git}
                img={git}
                name={'git'}
                percentages={[ 0, 78 ]}
              />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Skills;