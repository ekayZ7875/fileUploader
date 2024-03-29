/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('files',(table)=>{
        table.increments('id').primary()
        table.string('originalName')
        table.string('filename')
        table.integer('size')
        table.timestamp('created_at').defaultTo(knex.fn.now())

        
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('files')
  
};
