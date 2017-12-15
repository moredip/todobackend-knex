// based on https://github.com/elnaz/todo-hapi-postgres/blob/master/db/migrations/20160919231029_create_todos.js
exports.up = function(Knex, Promise){
  return Knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('todos', (table) => {
      table.uuid('id').primary().defaultTo(Knex.raw("uuid_generate_v1mc()")).notNullable();
      table.text('title').notNullable();
      table.boolean('completed').defaultTo(false).notNullable();
      table.integer('order');
    });
}

exports.down = function(){
  throw new Error("down migration not implemented");
}
