import express from 'express';
import promiseRouter from 'express-promise-router';

import createDataMapper from './dataMapper'
import applyRoutes from './routes'

export default function serve(port){
  const router = promiseRouter();
  const dataMapper = createDataMapper();

  applyRoutes(router,{dataMapper});

  express()
    .use(router)
    .listen(port, ()=> {
      console.log(`Listening on port ${port}`);
    });
}
