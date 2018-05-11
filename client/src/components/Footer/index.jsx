import React, { Component } from 'react';

import './footer.scss';
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">

        <ul className="social">
          <li>
            <a href="https://linkedin.com/in/jaehchi" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/jaehyun.chi" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/jaehchi" target="_blank">
              <i className="fab fa-github-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jaehchi/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>

        <div className="copyright">Jaehyun Chi 2018</div>

      </div>
    );
  }
}

export default Footer;

