import React, { Component } from 'react';

import './contact.scss';
class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact section" name="contact" id="contact">

        <div className="contact-grid">
          <div className="contact-title">
            <h1>Contact Me</h1>
          </div>
          
          <div className="contact-grid-item">
            <i class="fas fa-mobile-alt">909 270 9853</i>
          </div>
          <div className="contact-grid-item">
            <i class="fas fa-envelope-square">jaehchi@gmail.com</i>
          </div>
        </div>

        <div className="contact-content">
          content
        </div>

      </div>
    );
  }
}

export default Contact;




// <div className="contact-container contact-heading">
//   <h1>
//     <span className="line-center-contact">Contact Me</span><br/>
//   </h1>
//   <p>Let's get in touch! Linkedin or email works best!</p>
// </div>
// <div className="contact-buttons">
//   <a href="https://linkedin.com/in/jaehchi" className="" target="_blank">
//     <i className="fab fa-linkedin"></i>
//   </a>
//   <a href="https://linkedin.com/in/jaehchi" className="" target="_blank">
//     <i class="fas fa-envelope-square"></i>
//   </a>
// </div>