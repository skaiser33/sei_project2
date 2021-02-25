'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
