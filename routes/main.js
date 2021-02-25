const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');



//GET functionality for populating comedian dropdown)
router.get('/', (req, res) => {
  db.comedian.findAll()
  .then((comedians) => {
    console.log(comedians)
      res.render('main', {allComedians: comedians})
  })
  .catch((error) => {
      console.log('Error in GET /', error)
      res.status(400).render('main/404')
    })
})
//GET functionality for populating topic dropdown)
router.get('/', (req, res) => {
  db.topic.findAll()
  .then((topics) =>{
    console.log(topics)
    res.render('main', {allTopics: topics})
  })
  .catch((error) => {
      console.log('Error in GET /', error)
      res.status(400).render('main/404')
    })
})

//
//
// const comedians = db.comedians.findAll();
//
// router.get('/comedians', (req, res) => {
//   res.render('layout', {comedians: results})
// })
// .catch((error) => {
//   console.log('Error in GET /', error)
//   res.status(400).render('main/404')
// })
//POST functionality for selecting comedian


//POST functionality for selecting topic [if these are part of the nav bar that appears on all post-login pages, this only needs to be written once]



module.exports = router;
