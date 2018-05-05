import express from 'express';
import  { emailController }  from './controllers/emailController';

const router = express.Router();

router.use('/sendEmail', emailController);

export default router;