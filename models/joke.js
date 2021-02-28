'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joke extends Model {
    static associate(models) {
      models.joke.belongsTo(models.comedian);
      models.joke.belongsToMany(models.user, {through: "usersJokes"})
      models.joke.belongsToMany(models.topic, {through: "jokesTopics"})
    }
  };
  joke.init({
    content: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    comedianId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'joke',
  });
  return joke;
};
