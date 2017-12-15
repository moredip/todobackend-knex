import express from 'express';
import promiseRouter from 'express-promise-router';

import applyRoutes from './routes'

// Constants
const PORT = process.env.PORT || 3000;

const router = promiseRouter();

applyRoutes(router);

express()
  .use(router)
  .listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
  });
