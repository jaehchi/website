import React, { Component } from 'react';

import './footer.scss';
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-wrapper">
      
        <div className="footer-container">
          <div className="footer-contents">

            <a href="https://linkedin.com/in/jaehchi" className="" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/jaehyun.chi" className="" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/jaehchi" className="" target="_blank">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.instagram.com/jaehchi/" className="" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>

            <div className="copyright">© Jaehyun Chi 2018</div>
          
          </div>
        </div>


      </div>
    );
  }
}

export default Footer;

