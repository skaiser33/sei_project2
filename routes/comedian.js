const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');


//GET functionality for populating joke list including laugh button, laugh count
router.get('/', (req, res) => {
  db.comedian.findAll()
    .then((comedians) => {
      db.topic.findAll()
      .then((topics) => {
        db.comedian.findOne({
        where: {id: 1},         //REMEMBER TO change to actual comedian id
        include: [db.joke]
      }).then((comedian) => {

          
          // comedian.getJokes().then(function(jokes) {
            //do something with pets here
          // });
        // });
        // console.log("--------", user.dataValues.jokes[0].dataValues.content)
        res.render('comedian.ejs', {comedian: comedian, allTopics: topics, allComedians: comedians});
      // }).catch((error) => {
      //   console.log('Error in GET /', error)
      //   res.status(400).render('main/404')


      })
    })  
  })
});


//
// in template
// <% comedians.forEach %>
// <option value= results.id>results.name</option>
// <% } %>


// what makes up a dropdown list
//
// where does this data come from


//POST functionality for adding a laugh

//DELETE functionality for un-laugh




module.exports = router;
