Just for reference, these are the model:create statements we used and the associations:

sequelize model:create --name comedian --attributes name:string,website:string

sequelize model:create --name joke --attributes content:text,likes:integer,comedianId:integer

sequelize model:create --name topic --attributes name:string

sequelize model:create --name usersJokes --attributes userId:integer,jokeId:integer

sequelize model:create --name jokesTopics --attributes jokeId:integer,topicId:integer

ASSOCIATIONS:
INSIDE models/joke.js

models.joke.belongsTo(models.comedian);
models.joke.belongsToMany(models.user, {through: "userJokes"})
models.joke.belongsToMany(models.topic, {through: "jokesTopics"})

INSIDE models/user.js
models.user.belongsToMany(models.joke, {through: "userJokes"})

INSIDE models/topic.js
models.topic.belongsToMany(models.joke, {through: "jokesTopics"})


HERE IS THE BASIC PLAN FOR OUR ROUTES:
main (post login) (get functionality for populating comedian dropdown) + (get functionality for populating topic dropdown) + (post functionality for selecting comedian) + (post functionality for selecting topic) [if these are part of the nav bar that appears on all post-login pages, this only needs to be written once]

comedian (get functionality for populating joke list including laugh button, laugh count) + (post functionality for adding a laugh) + (delete functionality for un-laugh)

topic (get functionality for populating joke list including comedian name, laugh button, laugh count) + (post functionality for adding a laugh) + (delete functionality for un-laugh)

favorites (get functionality for populating joke list including comedian name, un-laugh button, laugh count) + (delete functionality for un-laugh)

profile (change to account settings, update password, delete account) 
