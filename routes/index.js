var express = require('express');
var router = express.Router();
var db = require('../database/database');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'puppyApp' });
});
  // response.send('Yay')
  db.getAllPuppies()
    .then( puppies => {
      // const indexPuppies = puppies.map( book =>
      //   Object.assign( {}, book,
      //     { description: book.description.slice( 0, 20 ) }
      //   )
      // )

      response.render('index', { puppies }
    )
  })


module.exports = router;
