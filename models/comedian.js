'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comedian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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