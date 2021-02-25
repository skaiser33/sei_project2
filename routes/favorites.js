const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

// we use the middleware in the middle of our route to the profile (or any other page we want to restrict)
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

//GET functionality for populating joke list including comedian name, un-laugh button, laugh count 

// =========Works gives comedian name======/
// router.get('/', function(req, res) {
//   db.joke.findOne({
//     where: {id: 5},
//     include: [db.comedian, db.user ]
//   }).then(function(joke){
//     console.log(joke.comedian.name)
    
//   })    
// });

// ====== THIS IS THE ONE THAT WORKS!!!!!!!!=====//
// returns individual joke

router.get('/', function(req, res) {
  db.user.findOne({
    where: {id: 2},
    include: [db.joke]
  }).then(function(user){
    // console.log("--------", user.dataValues.jokes[0].dataValues.content)
    res.render('favorites.ejs', {
      user: user
    });
  })    
});

// router.get('/', function(req, res) {
//   db.user.findOne({
//     where: {id: 2},
//     include: [db.joke, db.comedian]
//   }).then(function(user){
//     console.log("--------", user.dataValues.jokes[0].dataValues.content)
    
//   })    
// });



// router.get('/', function(req, res) {
//     db.user.findbyPk(1)({
//       include: [db.joke]
//     }).then(function(foundUser){
//     foundUser.getJokes().then(function(foundJokes) {
//       console.log('-----',foundUser.name, foundJokes)
//       res.render('favorites.ejs', {
//       favJokes: foundJokes});
      
//     });
//   });
// });

// ============ returs user and empty joke object =========
// router.get('/', function(req, res) {
//   db.user.findOne({
//     where: {id: 2},
//     include: [db.joke ]
//   }).then(function(user){
//     console.log(user)
//     user.jokes.forEach(function(joke){
//       console.log('-----', joke.content)
//       res.render('favorites.ejs');
//     }) 
//   })    
// });

// -------Works---------//
// router.get('/', function(req, res) {
//   db.joke.findOne({
//     where: {id: 2},
//     include: [db.topic ]
//   }).then(function(joke){
//     console.log(joke)
//     joke.topics.forEach(function(topic){
//       console.log('-----', topic.name)
//       res.render('favorites.ejs');
//     }) 
//   })    
// });


// -----------Returns user name but jokes content is undefined ----------//
// router.get('/', function(req, res) {
//   db.user.findByPk(3, {include: [db.joke]}).then(function(foundUser){
//     foundUser.getJokes().then(function(foundJokes) {
//       console.log('-----',foundUser.name, foundJokes.content)
//       res.render('favorites.ejs', {
//       favJokes: foundJokes});
      
//     });
//   });
// });





//DELETE functionality for un-laugh

module.exports = router;
