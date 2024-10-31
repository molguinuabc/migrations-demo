'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ActivoTags', [
      {
        activoId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoId: 1,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoId: 2,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
