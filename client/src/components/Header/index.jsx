import React from 'react';

import './header.scss';


const Header = () => {
  return (
    <header id="header">
      <div className="header">
        <div className="name">
          <h1>JAE H. CHI</h1>
        </div>
        <div className="position">
          <h3>SOFTWARE ENGINEER / UX &amp; UI ENTHUSIAST</h3>
        </div>
        <div className="btn">
          <a href="#about">About Me</a>
          <a href="" className="btn-resume"><i className="fas fa-poo"></i> Download Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
