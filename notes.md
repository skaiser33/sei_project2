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