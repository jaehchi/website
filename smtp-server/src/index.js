import { createServer } from 'http';
import { success } from '../../rest-server/src/lib/log';

import App from './config/express';

const app = App.express;

const server = createServer( app );
const PORT = process.env.PORT || 8080;

server.listen( PORT, err => {
  if (err) {
    throw new Error;
  }
  success(`SMTP Server is now listening on PORT: ${PORT}`);
});

export default server;
