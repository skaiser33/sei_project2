const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const bcrypt = require('bcrypt')

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
      passport.authenticate('local', {
        successRedirect: '/main',
        successFlash: 'Account created and logged in'
      })(req, res);
    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  }).catch(error => {  
    req.flash('error', error.message);
    res.redirect('/auth/signup');
  });
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password',
  successFlash: 'You have logged in!'
}));

router.post('/changepw', function (req, res) {       
  const oldPassword = req.body.oldpassword;
  const updatedPassword = req.body.updatedpassword;
  if (bcrypt.compareSync(oldPassword, req.user.password)) {
    db.user.findOne({
      where: { id: req.user.id }
    }).then((user) => {
      let hash = bcrypt.hashSync(updatedPassword, 12);
      user.update({
        password: hash
      })
      req.flash('success','You have successfully updated your password!');
      res.redirect('/profile');
    })
  } else {
    req.flash('error','Update failed due to incorrect password.');
    res.redirect('/profile');
  };
});

router.get('/delete', (req, res) => {
  res.render('auth/delete')
});

router.post('/delete', function (req, res) {
  const userPassword = req.body.password;
  if (bcrypt.compareSync(userPassword, req.user.password)) {
    db.user.destroy({
      where: { id: req.user.id }
    }).then(function (db) {   
      req.logout();
      req.flash('success', 'You have deleted your account and logged out');
      res.redirect('/');
    });
  } else {
    req.flash('error','Delete unsuccessful due to incorrect password.');
    res.redirect('/profile');
  };
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have logged out');
  res.redirect('/');
}); 


module.exports = router;
