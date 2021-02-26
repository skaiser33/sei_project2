const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

// we use the middleware in the middle of our route to the profile (or any other page we want to restrict)
// router.get('/profile', isLoggedIn, (req, res) => {
//   res.render('profile');
// });

//GET functionality for populating joke list including comedian name, laugh button, laugh count
router.get('/', (req, res) => {
  db.comedian.findAll()
    .then((comedians) => {
      db.topic.findAll()
      .then((topics) => {
        db.topic.findOne({
        where: {id: 1},         //REMEMBER TO change to actual topic id
        include: [db.joke]
      }).then((topic) => {
        // console.log("--------", user.dataValues.jokes[0].dataValues.content)
        res.render('topic.ejs', {topic: topic, allTopics: topics, allComedians: comedians});
      // }).catch((error) => {
      //   console.log('Error in GET /', error)
      //   res.status(400).render('main/404')
      })
    })  
  })
});


//POST functionality for adding a laugh

//DELETE functionality for un-laugh

module.exports = router;
