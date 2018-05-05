import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import parser from 'body-parser';
import { resolve } from 'path'

import router from '../../routes';

const middleWare = [
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  parser.json(),
  parser.urlencoded( { extended: true } ),
]

class App {
  constructor () {
    this.express = express();
    this.mountMiddleWare();
    this.mountRoutes();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
  }

  mountRoutes () {
    this.express.use('/api', router);
  }
}

export default new App();