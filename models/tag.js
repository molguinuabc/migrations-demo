'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Tag.belongsToMany(models.Activo,{through:models.ActivoTags})
    }
  }
  Tag.init({
    tag: DataTypes.STRING
  }, {
    sequelize,
    name: {
      singular:'tag',
      plural: 'tags'
    },
  });
  return Tag;
};