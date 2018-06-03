import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import parser from 'body-parser';
import compression from 'compression';
import { resolve } from 'path';

import router from '../../routes';

const middleWare = [
  compression(),
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
    this.express.get('*.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
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