const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');



//GET functionality for populating comedian dropdown)
router.get('/', (req, res) => {
  res.render('main')
  })    

//GET functionality for populating topic dropdown)  

//POST functionality for selecting comedian 

//POST functionality for selecting topic [if these are part of the nav bar that appears on all post-login pages, this only needs to be written once]



module.exports = router;
