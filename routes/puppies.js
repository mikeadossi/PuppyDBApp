/* GET users listing. */
'use strict';
var express = require('express');
var router = express.Router();
var db = require('../database/database');

router.get('/', function(request, response, next) {
  response.send('respond with a resource');
});
module.exports = router;

router.post('/new', (request, response, next) => {
  const name = request.body.name
  const breed = request.body.breed
  const image_url = request.body.image_url
  const description = request.body.description

 db.createPuppy(name, breed, image_url, description)
   .then(puppy => response.redirect(`/puppy/${puppy.id}`) )
   .catch(error => { response.render('error', {error})})
})

router.get('/delete/:id', (request, response, next) => {
  const id = request.params.id
  db.deletePuppyById(id)
    .then(id => response.redirect('/') )
    .catch(error => {response.render('error', {error})
  })
})

router.get('/:id', (request, response, next) => {
  const puppy_id = request.params.id
  db.getBookById(puppy_id)
    .then(puppy => {response.render('details', {puppy})
    })
    .catch(error => {response.render('error', {error})
    })
})



module.exports = router
