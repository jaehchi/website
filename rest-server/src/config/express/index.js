import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import parser from 'body-parser';
import compression from 'compression';
import { resolve } from 'path'

const middleWare = [
  compression(),
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  parser.json(),
  parser.urlencoded( { extended: true } ),
  express.static( resolve( __dirname, '../../../../client/public') ) 
]

class App {
  constructor () {
    this.express = express();
    this.mountMiddleWare();
  }

  mountMiddleWare() {
    this.express.use(...middleWare);
    this.express.get('*.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }
}

export default new App();