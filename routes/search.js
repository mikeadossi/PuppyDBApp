var express = require('express');
var router = express.Router();
var db = require('../database/database');

router.get('/', (request, response, next) => {
  const query = request.query
  console.log(query)
  db.findPuppies(query)
    .then(query => {response.render('search', {query})
  }).catch(error => {response.render('error', {error})
    })
})
module.exports = router;
