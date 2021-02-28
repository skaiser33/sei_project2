'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jokesTopics extends Model {
    static associate(models) {
    }
  };
  jokesTopics.init({
    jokeId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jokesTopics',
  });
  return jokesTopics;
};