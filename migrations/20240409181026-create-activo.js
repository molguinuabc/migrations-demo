'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numSerie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      numInventario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      imagen: {
        type: Sequelize.BLOB,
        allowNull: true
      },
 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activos');
  }
};