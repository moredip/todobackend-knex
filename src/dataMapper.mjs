import knex from 'knex';
import dbConfig from '../db/knexfile';

export default function createDataMapper(){
  const db = knex(dbConfig);
  const todosTable = db('todos');

  return {
    allTodos(){
      return todosTable.select();
    }
  };
}
