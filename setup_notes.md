-cd INTO REPO FOLDER "sei_project2"
-RUN npm install 
-OPEN THE config_notes.md FILE AND FOLLOW THE INSTRUCTIONS
-CREATE A .env FILE and copy and paste the following: SESSION_SECRET=
-ASK STEVEN FOR THE SECRET VIA SLACK
-CREATE YOUR DATABASE LOCALLY WITH THE FOLLOWING COMMAND IN TERMINAL: createdb gigglebytes
-MIGRATE WITH THE FOLLOWING COMMAND IN YOUR TERMINAL: sequelize db:migrate 


-I need to make routes/views for:
main (post login)
comedian
topic
favorites

-all app.gets should have isLoggedIn as 2nd parameter OR if you want to lock down all the routes in a specific controller, you can add the isLoggedIn middleware when you use the middleware (app.use('/dinos', isLoggedIn, require('./routes/dinos'));

-res.locals.currentuser (can i use for "Logged In As ...")

FOR DROPDOWNS:
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

-what get/post/etc code goes in each route/__.js file...give some guidance in the comments


