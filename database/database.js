const databaseName = 'puppies'
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const database = pgp(connectionString)


const getAllPuppies = () => {
  const sql = 'SELECT * FROM pups'

  return database.any(sql)
}

const createPuppy = (name, breed, image_url, description) => {
  const sql = 'INSERT INTO pups (name, breed, image_url, description) VALUES ($1, $2, $3, $4) RETURNING *'

  return database.one(sql, [name, breed, image_url, description] )
}

const getPuppyById = (puppy_id) => {
  const sql = 'SELECT * FROM pups WHERE pups.id = $1'

  return database.one(sql, [puppie_id])
}

const findPuppies = (options) => {
  const sql = 'SELECT * FROM pups WHERE name ILIKE $1 OR description ILIKE $1 OR breed ILIKE $1'
  let variables = []
    {
    let q = options.q
      .toLowerCase()
      .replace(/^ */, '%')
      .replace(/ *$/, '%')
      .replace(/ +/g, '%')

    variables.push(q)

  return database.any(sql, variables)
  }
}

const deleteBookById = (id) => {
  const sql = 'DELETE FROM pups WHERE id = $1'
  //why does id work here but on line 20 it has to be pups.id?
  //I checked postico to see if the sql queries work and they both do

  return database.none(sql, [id])

}

module.exports = {
  getAllPuppies,
  createPuppy,
  getPuppyById,
  findPuppies,
}
