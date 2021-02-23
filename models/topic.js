'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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