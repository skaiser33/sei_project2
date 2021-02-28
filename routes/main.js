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
        res.render('main', { allTopics: topics, allComedians: comedians, currentUser: currentUser})
      }).catch((error) => {
        res.status(400).render('main/404')
      })
    })
  })  
});

router.post('/addjoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes + 1
    foundJoke.save()
    const foundUser = await db.user.findByPk(req.user.id)
    foundUser.addJoke(foundJoke)
    res.redirect(`/main`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/main`)
  }	 
});

router.post('/takejoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes - 1
    foundJoke.save()  
    const foundUser = await db.user.findByPk(req.user.id)
    foundUser.removeJoke(foundJoke)
    res.redirect(`/main`) 
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/main`)
  }	 
});


module.exports = router;