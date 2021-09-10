const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, Category }) {
      // define association here
      Question.belongsTo(Theme);
      Question.belongsTo(Category);
    }
  }
  Question.init(
    {
      ThemeId: {
        field: 'theme_id',
        type: DataTypes.INTEGER,
        reference: {
          model: 'Themes',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      CategoryId: {
        field: 'category_id',
        type: DataTypes.INTEGER,
        reference: {
          model: 'Category',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isAnswered: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
