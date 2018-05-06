import React from 'react';
import ChangingProgressbar from './ChangingProgressbar';

const Skill = (props) => {

  return (
    <div>
      {
        !props.hovered ?
          <img src={props.img} /> :
          <ChangingProgressbar
            percentages={props.percentages}
            value={props.name}
            background
          />
      }
    </div>
  )

};

export default Skill;