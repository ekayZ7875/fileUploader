// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  
  development: {
    client: 'pg',
    connection: {
      database: 'fileUploader',
      user:     'postgres',
      password: 'tanurt@123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  

};
