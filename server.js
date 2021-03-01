require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');
const ejsLint = require('ejs-lint');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname + '/public/images/favicon.ico')));
app.use(layouts);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/auth', require('./routes/auth'));
app.use('/main', require('./routes/main'));
app.use('/comedian',  require('./routes/comedian'));
app.use('/topic',  require('./routes/topic'));
app.use('/favorites',  require('./routes/favorites'));
app.use('/profile',  require('./routes/profile'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
