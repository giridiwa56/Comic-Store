'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comic.belongsTo(models.publisher)
    }
  }
  comic.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    page: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comic',
  });
  return comic;
};