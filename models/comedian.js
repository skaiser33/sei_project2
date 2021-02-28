'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comedian extends Model {
    static associate(models) {
      models.comedian.hasMany(models.joke)
    }
  };
  comedian.init({
    name: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comedian',
  });
  return comedian;
};