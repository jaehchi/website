import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import mobile from '../../../public/images/mobile.jpg';
import gmail from '../../../public/images/gmail.jpg';

import 'react-toastify/dist/ReactToastify.css';
import './contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      message: null,
      errorMessages: null
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onError = this.onError.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.value
    })
  }

  async onSubmit(e) {
    e.preventDefault();

    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    let data = null;

    try {
      data = { data } = await axios.post('http://localhost:8080/api/sendEmail', payload)
    } catch (err) {
      // console.log(err)
    }

    data.data.errors ? this.onError(data.data.errors) : (
      toast.success(`  🚀  The message is on it's way!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggablePercent: 60,
        pauseOnHover: true,
        draggable: true,
      }), this.setState({
        errorMessages: {}
      })
    );

  }

  onError(errors) {
    const errorMessages = {};

    for (let i = 0; i < errors.length; i++) {
      let name = errors[ i ].field;
      let message = errors[ i ].messages[ 0 ].slice(-5);

      if (message === 'tring' || message === 'empty') {
        errorMessages[ name ] = `${name} field is required.`
      }

      if (message === 'email') {
        errorMessages[ name ] = `${name} must be a valid email adresss.`
      }

      if (message === ' long') {
        errorMessages[ name ] = `${name} must be at least 3 characters long.`
      }
    }

    this.setState({
      errorMessages,
    })

  }

  render() {

    return (
      <div className="contact section" name="contact" id="contact">

        <div className="contact-align">
          <div className="contact-contacts">
            <div className="content-title">
              <h2>Contact Me</h2>
            </div>

            <div className="contact-grid">
              <ul>
                <li className="contact-grid-item">
                  <h4>
                  Don't be shy, reach out and send me a friendly hello. Let's connect.
                </h4>
                </li>
                <li className="contact-grid-item">
                  <img src={mobile} alt="" />
                  (909) 270-9853
              </li>
                <li className="contact-grid-item">
                  <img src={gmail} alt="" />
                  jaehchi@gmail.com
              </li>
              </ul>
            </div>
          </div>

          <div className="contact-content">
            <div className="content-title">
              <h2>Send Me a Message</h2>
            </div>

            <form className="contact-form">
              <div className="contact-form-item">
                <div className="label-item">
                  <label htmlFor="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      autoComplete="name"
                      onChange={this.onChange}
                      className={!this.state.errorMessages ? null : (
                        this.state.errorMessages.name ?
                          "required" : ""
                      )
                      }
                    />
                  </label>
                  {!this.state.errorMessages ? null : (
                    this.state.errorMessages.name ?
                      <div className="requirements">
                        {this.state.errorMessages.name}
                      </div> : null
                  )
                  }
                </div>
                <div className="label-item">
                  <label htmlFor="email">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={this.onChange}
                      className={!this.state.errorMessages ? null : (
                        this.state.errorMessages.email ?
                          "required" : ""
                      )
                      }
                    />
                  </label>
                  {!this.state.errorMessages ? null : (
                    this.state.errorMessages.email ?
                      <div className="requirements">
                        {this.state.errorMessages.email}
                      </div> : null
                  )
                  }
                </div>
              </div>

              <label htmlFor="body">
                <textarea
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  onChange={this.onChange}
                  className={!this.state.errorMessages ? null : (
                    this.state.errorMessages.message ?
                      "required" : ""
                  )
                  }
                />
              </label>
              {!this.state.errorMessages ? null : (
                this.state.errorMessages.message ?
                  <div className="requirements">
                    {this.state.errorMessages.message}
                  </div> : null
              )
              }
              <div className="sendEmail">
                <button onClick={this.onSubmit}>Send</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          draggablePercent={60}
          pauseOnHover
        />
      </div>
    );
  }
}

export default Contact;


