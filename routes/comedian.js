const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

let query

//GET functionality for populating joke list by selected comedian
router.get('/', (req, res) => {
  query = req.query
  db.comedian.findAll()
    .then((comedians) => {
      db.topic.findAll()
      .then((topics) => {
        db.comedian.findOne({
        where: {id: req.query.comedian},      
        include: [db.joke]        
      }).then((comedian) => {        
          db.user.findOne({
          where: {id: req.user.id}, 
          include: [db.joke]
          })
        .then((currentUser) => {
          res.render('comedian.ejs', {comedian: comedian, allTopics: topics, allComedians: comedians, currentUser: currentUser});
      // }).catch((error) => {
      //   console.log('Error in GET /', error)
      //   res.status(400).render('main/404')
        })
          
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
    res.redirect(`/comedian?comedian=${query.comedian}`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/comedian?comedian=${query.comedian}`)
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
    res.redirect(`/comedian?comedian=${query.comedian}`) 
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/comedian?comedian=${query.comedian}`)
  }	 
})

module.exports = router;
