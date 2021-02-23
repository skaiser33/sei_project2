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

//DELETE functionality for un-laugh

module.exports = router;
