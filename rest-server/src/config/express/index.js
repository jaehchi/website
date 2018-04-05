import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import parser from 'body-parser';
import { resolve } from 'path'

const middleWare = [
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
  }
}

export default new App();