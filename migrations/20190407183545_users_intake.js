
exports.up = function(knex, Promise) {
    return knex.schema.createTable('nutrients_intakes', (table)=>{
        table.increments().primary();
        table.string('name').notNullable('');
        table.float('value', 2).notNullable(0);
        table.string('unit').notNullable('');
        table.date('date').defaultTo(knex.fn.now())
        table.integer('nutrient_id').references('id')
        .inTable('nutrients')
        .onDelete('CASCADE')
        .index();
        table.integer('user_id').references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
    })
};

exports.down = function(knex, Promise) {
  
};
