import express from 'express';
import promiseRouter from 'express-promise-router';

// Constants
const PORT = process.env.PORT || 3000;

const router = promiseRouter();

router.get('/', async function(req, res){
  res.send('Hello world\n');
});


express()
  .use(router)
  .listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
  });
