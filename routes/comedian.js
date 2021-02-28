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
      db.comedian.findOne({
        where: {id: req.query.comedian},      
        include: [db.joke]        
      }).then((comedian) => {        
        db.user.findOne({
          where: {id: req.user.id}, 
          include: [db.joke]
        }).then((currentUser) => {
          res.render('comedian.ejs', {comedian: comedian, allTopics: topics, allComedians: comedians, currentUser: currentUser});
        // }).catch((error) => {
        //   res.status(400).render('main/404')
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
    res.redirect(`/comedian?comedian=${query.comedian}`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/comedian?comedian=${query.comedian}`)
  }	 
});

router.post('/takejoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes - 1
    foundJoke.save()  
    const foundUser = await db.user.findByPk(req.user.id)
    foundUser.removeJoke(foundJoke)
    res.redirect(`/comedian?comedian=${query.comedian}`) 
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/comedian?comedian=${query.comedian}`)
  }	 
});


module.exports = router;