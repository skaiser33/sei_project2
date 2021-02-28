const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', (req, res) => {
  db.comedian.findAll()
  .then((comedians) => {
    db.topic.findAll({include: [db.joke]})
    .then((topics) => {
      db.user.findOne({
        where: {id: req.user.id}, 
        include: [db.joke]
      }).then((currentUser) => {
        res.render('profile', { allTopics: topics, allComedians: comedians, currentUser: currentUser})
      }).catch((error) => {
        res.status(400).render('main/404')
      })
    })
  })  
});


module.exports = router;
