'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersJokes extends Model {
    static associate(models) {
    }
  };
  usersJokes.init({
    userId: DataTypes.INTEGER,
    jokeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersJokes',
  });
  return usersJokes;
};