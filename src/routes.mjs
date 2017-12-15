export default function applyRoutes(router,{dataMapper}){
  router.get('/', async function(req, res){
    res.send('Hello world\n');
  });

  router.get('/todos', async function(req,res){
    const todos = await dataMapper.allTodos();
    res.json(todos);
  });
}
