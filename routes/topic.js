const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

let query

//GET functionality for populating joke list including comedian name, laugh button, laugh count
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
        res.render('topic.ejs', {topic: topic, allTopics: topics, allComedians: comedians, currentUser: req.user});
      // }).catch((error) => {
      //   console.log('Error in GET /', error)
      //   res.status(400).render('main/404')
      })
    })  
  })
});

//=== ADD LAUGH BUTTON===//
//POST functionality for adding a laugh
router.post('/addjoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes + 1
    foundJoke.save()
    const foundUser = await db.user.findByPk(req.user.id)    
    foundUser.addJoke(foundJoke)
    console.log('===========')
    console.log(foundUser.name, 'has faved', foundJoke.content)
    // res.redirect(`/topic/${req.query.topic}`)
    res.redirect(`/topic?topic=${query.topic}`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/topic?topic=${query.topic}`)
  }	 
})

//POST functionality for un-laugh
router.post('/takejoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes - 1
    foundJoke.save()  
    const foundUser = await db.user.findByPk(req.user.id)
    foundUser.removeJoke(foundJoke)
    console.log('===========')
    console.log(foundUser.name, 'has removed', foundJoke.content)
    res.redirect(`/topic?topic=${query.topic}`) 
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/topic?topic=${query.topic}`)
  }	 
})

module.exports = router;
