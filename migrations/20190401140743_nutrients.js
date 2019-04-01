
exports.up = function(knex, Promise) {
    return knex.schema.createTable('nutrients', (table)=>{
        table.increments();
        table.string('name').notNullable('');
        table.string('units_of_measurement').notNullable('');
        table.float('daily_value', 2).notNullable(0)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('nutrients')
};
