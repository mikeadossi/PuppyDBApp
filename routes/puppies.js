/* GET users listing. */
'use strict';
var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;

router.post('/new', (req, res, next) => {
  const name = req.body.name
  const breed = req.body.breed
  const image_url = req.body.image_url
  const description = req.body.description

 db.createPuppy(name, breed, image_url, description)
   .then(puppy => res.redirect(`/puppy/${puppy.id}`) )
   .catch(error => { res.render('error', {error})})
})

router.get('/delete/:id', (req, res, next) => {
  const id = req.params.id
  db.deletePuppyById(id)
    .then(id => res.redirect('/') )
    .catch(error => {res.render('error', {error})
  })
})

router.get('/:id', (req, res, next) => {
  const puppy_id = req.params.id
  db.getBookById(puppy_id)
    .then(puppy => {res.render('details', {puppy})
    })
    .catch(error => { res.render('error', {error})
    })
})



module.exports = router
