const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

// we use the middleware in the middle of our route to the profile (or any other page we want to restrict)
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

//GET functionality for populating comedian dropdown)

//GET functionality for populating topic dropdown)  

//POST functionality for selecting comedian 

//POST functionality for selecting topic [if these are part of the nav bar that appears on all post-login pages, this only needs to be written once]



module.exports = router;
