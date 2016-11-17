/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

'use strict';
var express = require('express');
var router = express.Router();
var db = require('../database');


router.get('/create', (req, res, next) => {
  res.render('create', { book: {} })
})

router.post('/new', (req, res, next) => {
  const title = req.body.title
  const author = req.body.author
  const image_url = req.body.image_url
  const description = req.body.description

 db.createBook(title, author, image_url, description)
   .then(book => res.redirect(`/books/${book.id}`) )
   .catch(error => { res.render('error', {error})})
})

router.get('/delete/:id', (req, res, next) => {
  const id = req.params.id
  db.deleteBookById(id)
    .then(id => res.redirect('/') )
    .catch(error => {res.render('error', {error})
  })
})

router.get('/:id', (req, res, next) => {
  const book_id = req.params.id
  db.getBookById(book_id)
    .then(book => {res.render('details', {book})
    })
    .catch(error => { res.render('error', {error})
    })
})



module.exports = router
