import React from 'react';

import './nav.scss';

const Nav = () => {
  return (
    <div className="navigation-wrapper">
      <div className="navigation container">
        <nav>
          <div className="">
            <a href="">Jaehyun Chi</a>
          </div>
          
          <ul>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Tech</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;