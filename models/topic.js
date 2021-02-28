'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class topic extends Model {
    static associate(models) {
      models.topic.belongsToMany(models.joke, {through: "jokesTopics"})
    }
  };
  topic.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'topic',
  });
  return topic;
};