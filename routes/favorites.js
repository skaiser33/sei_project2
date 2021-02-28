const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', (req, res) => {
  db.comedian.findAll()
  .then((comedians) => {
    db.topic.findAll()
    .then((topics) => {
      db.user.findOne({
      where: {id: req.user.id}, 
      include: [db.joke]
      }).then((user) => {
        res.render('favorites.ejs', {user: user, allTopics: topics, allComedians: comedians, currentUser: req.user});
      })
    })  
  })
});

router.post('/takejoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes - 1
    foundJoke.save()  
    const foundUser = await db.user.findByPk(req.user.id)
    foundUser.removeJoke(foundJoke)
    res.redirect('/favorites') 
  } catch (error) {
    req.flash('error', error.message)
    res.redirect('/favorites')
  }	 
})


module.exports = router;