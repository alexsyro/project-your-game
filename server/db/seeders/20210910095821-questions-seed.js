const { themes, categories, questions } = require('../seedArrays');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Themes', themes, {});
    await queryInterface.bulkInsert('Categories', categories, {});
    await queryInterface.bulkInsert('Questions', questions, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Themes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
