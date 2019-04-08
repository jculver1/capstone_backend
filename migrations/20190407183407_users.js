
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table)=>{
        table.increments();
        table.string('name').notNullable('');
    })
};

exports.down = function(knex, Promise) {
  
};
