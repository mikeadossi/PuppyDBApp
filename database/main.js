const pgp = require('pg-promise')()
const connectionString = `postgres://${process.env.USER}@localhost:5432/puppies`; // connects postgress to localhost
const db = pgp(connectionString);

module.exports = db
