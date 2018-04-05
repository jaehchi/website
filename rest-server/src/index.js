import { createServer } from 'http';

import App from './config/express';

const app = App.express;

const http = createServer( app );
const PORT = process.env.PORT || 3000;

server.listen( PORT, err => {
  if (err) {
    throw new Error;
  }
  success('successfully connected to port ', PORT);
});

export default server;
