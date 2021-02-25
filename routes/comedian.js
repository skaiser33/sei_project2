const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');

// we use the middleware in the middle of our route to the profile (or any other page we want to restrict)
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

//GET functionality for populating joke list including laugh button, laugh count
//make a call to the database to display



//
// in template
// <% comedians.forEach %>
// <option value= results.id>results.name</option>
// <% } %>


// what makes up a dropdown list
//
// where does this data come from


//POST functionality for adding a laugh

//DELETE functionality for un-laugh




module.exports = router;
