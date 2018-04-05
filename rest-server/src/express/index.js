import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import parser from 'body-parser';

//import routes
//

const middleWare = [
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  parser.json(),
  parser.urlencoded({ extended: true })
]

class App {
  constructor () {
    this.express = express();
    this.mountMiddleWare();
    //this.mountRoutes();
  }

  mountMiddleWare() {
    this.express.use(...middleWare)

    // Mount Routes
    // mountRoutes() {
    // this.express.use('/api', router);
    // }
  }
}