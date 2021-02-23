const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');

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
