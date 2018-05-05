import Joi from 'joi';

export default {
  sendEmail: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      message: Joi.string().required()
    }
  }
}