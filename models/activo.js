'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    
    static associate(models) {
      models.Activo.belongsToMany(models.Tag,{through:models.ActivoTags})
    }
  }
  Activo.init({
    numSerie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    numInventario: {
      type:DataTypes.INTEGER,
      unique: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Activo',
  });

  return Activo;
};