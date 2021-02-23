'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jokesTopics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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