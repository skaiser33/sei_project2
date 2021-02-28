const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

let query


router.get('/', (req, res) => {
  query = req.query
  db.comedian.findAll()
  .then((comedians) => {
    db.topic.findAll()
    .then((topics) => {
      db.topic.findOne({
        where: {id: req.query.topic},
        include: [db.joke]
      }).then((topic) => {
        db.user.findOne({
          where: {id: req.user.id}, 
          include: [db.joke]
        }).then((currentUser) => {
          res.render('topic.ejs', {topic: topic, allTopics: topics, allComedians: comedians, currentUser: currentUser});
        })
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
    res.redirect(`/topic?topic=${query.topic}`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/topic?topic=${query.topic}`)
  }	 
})

router.post('/takejoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes - 1
    foundJoke.save()  
    const foundUser = await db.user.findByPk(req.user.id)
    foundUser.removeJoke(foundJoke)
    res.redirect(`/topic?topic=${query.topic}`) 
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/topic?topic=${query.topic}`)
  }	 
})


module.exports = router;