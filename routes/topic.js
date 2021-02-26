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
        where: {id: 3},         //REMEMBER TO change to actual topic id
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


// router.get('/:id', (req, res) => {
//   db.comedian.findAll()
//     .then((comedians) => {
//       db.topic.findAll()
//       .then((topics) => {
//         db.topic.findOne({
//         where: {id: req.params.id},         //REMEMBER TO change to actual topic id
//         include: [db.joke]
//       }).then((topic) => {
//         // console.log("--------", user.dataValues.jokes[0].dataValues.content)
//         res.render('topic.ejs', {topic: topic, allTopics: topics, allComedians: comedians});
//       // }).catch((error) => {
//       //   console.log('Error in GET /', error)
//       //   res.status(400).render('main/404')
//       })
//     })  
//   })
// });



//=== ADD LAUGH BUTTON===//
//POST functionality for adding a laugh
// router.post('/addjoke/:id', function(req, res){
//   db.joke.findOne({
//     where: {id: req.params.id}
//   }).then(function(foundJoke){
//     // console.log("______0-----", foundJoke)
//     foundJoke.likes = foundJoke.likes + 1
//     // console.log("+++++++", foundJoke)
//     foundJoke.save()

//   }).then(function (foundJoke) {
//     db.user.findOne({
//       where: {id: 1}, //REMEMBER TO change to req.user.id
//     include: [db.joke]
//   }).then((user) => {
//       user.addJoke(foundJoke).then(function(relationInfo){
//         console.log(user.name, 'has faved', foundJoke.content)
//         res.redirect('/topic')
//       })
//     })
//   })
// })

router.post('/addjoke/:id', async (req, res) => {
  try {
  const foundJoke = await db.joke.findOne({
    where: {id: req.params.id}
  })
  foundJoke.likes = foundJoke.likes + 1
  foundJoke.save()


  const foundUser = await db.user.findOne({
      where: {id: 1}   //REMEMBER TO change to req.user.id

  })
      
  foundUser.addJoke(foundJoke)
  
  console.log('===========')
  console.log(foundUser.name, 'has faved', foundJoke.content)
  res.redirect('/topic')
      // })
    } catch (error) {

      req.flash('error', error.message)
      res.redirect('/topic')

  }	
 
})





//POST functionality for un-laugh

router.post('/takejoke/:id', function(req, res){
  db.joke.findOne({
    where: {id: req.params.id}
  }).then(function(foundJoke){
    // console.log("______0-----", foundJoke)
    foundJoke.likes = foundJoke.likes - 1
    // console.log("+++++++", foundJoke)
    foundJoke.save()
    res.redirect('/topic')
  })
})

// db.toy.findOrCreate({
//   where: {type: "ball", color: "green"}
// }).then(function([toy, created]) {
//   toy.getPets().then(function(pets) {
//     // Check if their are any pets associated with this toy
//     if (pets.length > 0) {
//       pets.forEach(function(pet) {
//         console.log(pet.name, 'loves their', toy.color, toy.type);
//       });
//     } else {
//       // findOrCreate a Pet and add it to the toy
//       db.pet.findOrCreate({
//         where: {
//           name: "Ruby Tuesday",
//           species: "Toy Aussie"
//         }
//       }).then(function([pet, created]) {
      //   db.user.findOne({
      //     where: {id: 1}, //REMEMBER TO change to req.user.id
      //     include: [db.joke]
      //   }).then((user) => {
      //       user.addJoke(joke).then(function(relationInfo){
      //         console.log(user.name, 'has faved', joke.content)
      //   })
      // });


// POST /pokemon - receive the name of a pokemon and add it to the database
// router.post('/', function(req, res) {
//   // TODO: Get form data and add a new record to DB
//   // res.send(req.body.name);
//   db.pokemon.findOrCreate({
//     where: {
//       name: req.body.name
//     }, 
//     defaults: {}
//     }).then(function ([foundOrCreatedPoke, created]) {    
//       console.log(foundOrCreatedUser.firstName);
//       console.log('---------------');
//       console.log(created);
//   })
//   .finally(function() {
//     res.redirect('/pokemon')
//   })  
// });

// DELETE Pokemon from the favorites list.
// router.post('/delete', function(req, res) {
//   db.pokemon.destroy({
//     where: { name: req.body.name }
//   }).then(function() {
//     console.log(req.body.name+ ' deleted');
//     res.redirect('/pokemon')
//   });
// })





module.exports = router;
