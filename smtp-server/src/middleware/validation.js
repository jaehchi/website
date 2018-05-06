import Joi from 'joi';

export default {
  sendEmail: {
    body: {
      name: Joi.string().regex(/^[a-zA-Z0-9,. ]*$/).min(3).required(),
      email: Joi.string().email().required(),
      message:  Joi.string().regex(/^[a-zA-Z0-9,. ]*$/).min(3).required()
    }
  }
}