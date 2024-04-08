/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('files_1',(table)=>{
        table.increments('id').primary()
        table.string('Name')
        table.integer('Size')
        table.timestamp('created_at').defaultTo(knex.fn.now())

        
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('files_1')
  
};