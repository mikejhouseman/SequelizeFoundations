'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tree.init({
    tree: DataTypes.STRING,
    location: DataTypes.STRING,
    heightFt: DataTypes.FLOAT,
    groundCircumferenceFt: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};