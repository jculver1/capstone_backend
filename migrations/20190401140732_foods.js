
exports.up = function(knex, Promise) {
    return knex.schema.createTable('foods', (table)=>{
        table.string('usda_id')
        table.string('name').notNullable().defaultTo('')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('foods')
};
