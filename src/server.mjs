import express from 'express';
import promiseRouter from 'express-promise-router';

import applyRoutes from './routes'

export default function serve(port){
  const router = promiseRouter();
  applyRoutes(router);

  express()
    .use(router)
    .listen(port, ()=> {
      console.log(`Listening on port ${port}`);
    });
}
