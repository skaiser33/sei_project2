const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');



//GET functionality for populating comedian dropdown)
router.get('/', (req, res) => {
  db.comedian.findAll()
    .then((comedians) => {
      db.topic.findAll({include: [db.joke]})
      .then((topics) => {
        res.render('main', { allTopics: topics, allComedians: comedians })
      })
      .catch((error) => {
        console.log('Error in GET /', error)
        res.status(400).render('main/404')
      })
    })
})

//POST functionality for selecting comedian


//POST functionality for selecting topic [if these are part of the nav bar that appears on all post-login pages, this only needs to be written once]



module.exports = router;
