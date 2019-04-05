module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/eatit'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || "postgres://irntvpknatfvem:8d494b097a55b9275b51981e864a9720deebb31501d3d17cfed348587bda9e41@ec2-54-225-95-183.compute-1.amazonaws.com:5432/dbtu62s3ubjorc"
  }

}