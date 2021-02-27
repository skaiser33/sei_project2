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

// POST route - modify password
router.post('/changepw', function (req, res) {       
  const oldPassword = req.body.oldpassword;
  const updatedPassword = req.body.updatedpassword;
  if (bcrypt.compareSync(oldPassword, req.user.password)) {
    // console.log('password is correct');
    db.user.findOne({
      where: { id: req.user.id }
    }).then((user) => {
      let hash = bcrypt.hashSync(updatedPassword, 12);
      // update the user's password in the db
      user.update({
        password: hash
      })
      console.log('success');
      req.flash('success','You have successfully updated your password!');
      // res.render('./profile')
      res.redirect('/profile');
    })
  } else {
      console.log('fail');
      req.flash('error','Update failed due to incorrect password.');
      res.redirect('/profile');
  };
});

//GET route - delete user confirmation page
router.get('/delete', (req, res) => {
  res.render('auth/delete')
});

// POST route - delete user
router.post('/delete', function (req, res) {
  const userPassword = req.body.password;
  if (bcrypt.compareSync(userPassword, req.user.password)) {
    console.log('password is correct');
    db.user.destroy({
      where: { id: req.user.id }
    }).then(function (db) {   
      //LOGOUT
      req.logout();
      // FLASH
      req.flash('success', 'You have deleted your account and logged out');
      res.redirect('/');
    // });
    });
  } else {
      console.log('fail');
      req.flash('error','Delete unsuccessful due to incorrect password.');
      res.redirect('/profile');
  };
});

router.get('/logout', (req, res) => {
  // .logut() is added to the req object by passport
  req.logout();
  // FLASH
  req.flash('success', 'You have logged out');
  res.redirect('/');
}); 

module.exports = router;
