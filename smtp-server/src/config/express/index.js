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
    this.mountErrorHandlers();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
  }

  mountRoutes () {
    this.express.use('/api', router);
  }

  mountErrorHandlers () {
    this.express.use(( err, req, res, next) => {
      res.send(err);
    })
  }
}

export default new App();