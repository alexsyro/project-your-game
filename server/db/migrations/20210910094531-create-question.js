module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ThemeId: {
        field: 'theme_id',
        type: Sequelize.INTEGER,
        reference: {
          model: 'Themes',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      CategoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        reference: {
          model: 'Category',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      isAnswered: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  },
};
