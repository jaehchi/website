import React, { Component } from 'react';

import './contact.scss';
class Contact extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="contact-wrapper" name="contact" id="contact">
        <div className="contact-container contact-heading">
          <h1>
            {/* <span>Like what you saw?</span><br/> */}
            <span className="line-center-contact">Contact Me</span><br/>
            {/* <span>r</span> */}
          </h1>
        </div>
        <div className="contact-content">
          <p>Let's connect! Linkedin or email works best!</p>
        </div>
        <div className="contact-buttons">
          <a href="https://linkedin.com/in/jaehchi" className="" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://linkedin.com/in/jaehchi" className="" target="_blank">
           <i class="far fa-paper-plane"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;