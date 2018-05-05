import React, { Component } from 'react';

import './contact.scss';
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit () {

  }

  render() {
    return (
      <div className="contact section" name="contact" id="contact">

      <div className="contact-contacts">
        <div className="content-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-grid-item">
            <i class="fas fa-mobile-alt"><div>
            909 270 9853</div></i>
          </div>
          <div className="contact-grid-item">
            <i class="fas fa-envelope-square">jaehchi@gmail.com</i>
          </div>
        </div>
      </div>
        
        <div className="contact-content">
          <div className="content-title">
            <h2>Send Me a Message</h2>
          </div>

          <form className="contact-form"> 
            <div className="contact-form-item">
              <label htmlFor="name">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  onChange={this.onChange} 
                />
              </label>
              <label htmlFor="email">
                <input
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  onChange={this.onChange} 
                />
              </label>
            </div>

            <label htmlFor="body">
              <textarea 
                type="textarea" 
                name="message" 
                placeholder="Message" 
                onChange={this.onChange} 
              />
            </label>
          </form>
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



