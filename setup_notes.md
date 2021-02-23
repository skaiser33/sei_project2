-cd INTO REPO FOLDER "sei_project2"
-RUN npm install 
-OPEN THE config_notes.md FILE AND FOLLOW THE INSTRUCTIONS
-CREATE A .env FILE and copy and paste the following: SESSION_SECRET=
-ASK STEVEN FOR THE SECRET VIA SLACK
-CREATE YOUR DATABASE LOCALLY WITH THE FOLLOWING COMMAND IN TERMINAL: createdb gigglebytes
-MIGRATE WITH THE FOLLOWING COMMAND IN YOUR TERMINAL: sequelize db:migrate 

-??? add seed instruction ???



main (post login) (get functionality for populating comedian dropdown) + (get functionality for populating topic dropdown) + (post functionality for selecting comedian) + (post functionality for selecting topic) [if these are part of the nav bar that appears on all post-login pages, this only needs to be written once]

comedian (get functionality for populating joke list including laugh button, laugh count) + (post functionality for adding a laugh) + (delete functionality for un-laugh)

topic (get functionality for populating joke list including comedian name, laugh button, laugh count) + (post functionality for adding a laugh) + (delete functionality for un-laugh)

favorites (get functionality for populating joke list including comedian name, un-laugh button, laugh count) + (delete functionality for un-laugh)

profile (change to account settings, update password, delete account) 




FOR DROPDOWNS (within forms?):

THESE COULD ALSO BE HOVERABLE DROPDOWNS...refer to this: https://www.w3schools.com/howto/howto_js_dropdown.asp
<label for="comedians">Choose a comedian:</label>

<select name="comedians" id="comedians">
  <option value="placeholder1">placeholder1</option>
  <option value="placeholder2">placeholder2</option>
  <option value="placeholder3">placeholder3</option>

</select>

<label for="topics">Choose a topic:</label>

<select name="topics" id="topics">
  <option value="placeholder1">placeholder1</option>
  <option value="placeholder2">placeholder2</option>
  <option value="placeholder3">placeholder3</option>

</select>

-SEED FILE!

-res.locals.currentuser (can i use for "Logged In As ...")