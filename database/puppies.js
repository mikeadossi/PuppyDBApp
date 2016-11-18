const db = require('./database')

const Puppy = {

  add: ( request, response, next ) => {

  },
  getAll: ( request, response, next ) => {
    db.any('SELECT * FROM pups')
    .then( data => {
        response.status( 200 ).json({
          status: 'sucess',
          data: data,
          message: 'Retrieved all puppies.'
        })
    })

  },
  getOne: ( request, response, next ) => {
    const { id } = request.params
    db.one( `SELECT * FROM pups WHERE id=${id}` )
    .then( data => {
      response.status( 200 ).json({
      status: 'yay',
      data: data,
      message: 'We did a thing'
    })
    .catch( error => next( error ))
  })


  },
  update: ( request, response, next ) => {

  },
  delete: ( request, response, next ) => {

  }
}

module.exports = Puppy
