var express = require('express');
var router = express.Router();
var db = require('../database/database');
/* GET home page. */

router.get('/', (request, response, next) => {

  db.getAllPuppies()
    .then( puppies => {

      // const indexPuppies = puppies.map( puppy =>
      //   Object.assign( {}, puppy,
      //     { description: puppies.description.slice( 0, 20 ) }
      //   )
      // )

      response.render('index', { puppies }
    )
  })
})

module.exports = router;
