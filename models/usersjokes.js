'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersJokes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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