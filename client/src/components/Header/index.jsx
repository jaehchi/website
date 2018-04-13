import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header id="header">
      <div className="header-bg">
        <div className="header-content">
          <div className="header-container">
            <div className="content-centering">
              <div className="text-centering">
                <h1 className="">JAE H. CHI</h1>
                <div className="header-text">
                  <h3>SOFTWARE ENGINEER / UX &amp; UI ENTHUSIAST</h3>
                </div>
                <a href="" className="btn">About Me</a>
                <a href="" className="btn-resume"><i class="fas fa-poo"></i> Download Resume</a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
