module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/eatit'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/eatit'
  }

}