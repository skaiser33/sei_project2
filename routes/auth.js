const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const bcrypt = require('bcrypt')
// let currentUser

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      // FLASH
      passport.authenticate('local', {
        successRedirect: '/main',
        successFlash: 'Account created and logged in'
      })(req, res);
    } else {
      // FLASH
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  }).catch(error => {
    // FLASH
    req.flash('error', error.message);
    res.redirect('/auth/signup');
  });
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

// FLASH
router.post('/login', passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password',
  successFlash: 'You have logged in!'
}));

// router.post('/changepw', passport.authenticate('local', {
//   successRedirect: '/profile',
//   failureRedirect: '/profile',
//   failureFlash: 'Invalid  password',
//   successFlash: 'You have successfully changed your password!'
// }));

// POST route - modify password
router.post('/changepw', function (req, res) {       
  // console.log(req.user);
  // console.log(req.body);

  const oldPassword = req.body.oldpassword;
  const updatedPassword = req.body.updatedpassword;
  

  if (bcrypt.compareSync(oldPassword, req.user.password)) {
    // console.log('password is correct');
    db.user.findOne({
      where: { id: req.user.id }
    })
      .then((user) => {
    // db.user.findByPk(req.user.id)
    // .then(function(user)
      console.log(user.name);
      let hash = bcrypt.hashSync(updatedPassword, 12);
      // store the hash as the user's password in the db
      // user.update = hash
      user.update({
        password: hash
      })
      console.log(`${hash}SUCCESS!`);;
      
    })
    
    // else {
    // // console.log('password is incorrect');
  };


  // if (password !== confirm) return res.end('passwords do not match');
  
  // update the user db here

  res.end('password reset');
});


router.get('/logout', (req, res) => {
  // .logut() is added to the req object by passport
  req.logout();
  // FLASH
  req.flash('success', 'You have logged out');
  res.redirect('/');
}); 

//PROFILE OPTIONS
//PUT functionality to verify and update password

//DELETE functionality to detelete account (after verifying password and asking for 2nd confirmation) 

module.exports = router;
