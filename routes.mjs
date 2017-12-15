export default function applyRoutes(router){
  router.get('/', async function(req, res){
    res.send('Hello world\n');
  });

  router.get('/todos', async function(req,res){
    res.json(['TODO!']);
  });
}
