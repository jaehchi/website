import express from 'express';
import validate from "express-validation";

import  { emailController }  from './controllers/emailController';
import validation from '../middleware/validation';

const router = express.Router();

router.route('/sendEmail').post(validate(validation.sendEmail), emailController);

export default router;