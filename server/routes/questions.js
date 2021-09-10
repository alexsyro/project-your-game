const router = require('express').Router();
const { Theme, Category, Question } = require('../db/models');

router.get('/', async (req, res) => {
  const themes = await Question.findAll({
    attributes: ['id', 'question', 'answer', 'isAnswered'],
    include: [
      {
        model: Category,
        key: 'id',
        attributes: [['name', 'category_name']],
      },
      {
        model: Theme,
        key: 'id',
        attributes: [['name', 'theme_name']],
      },
    ],
    raw: true,
  });
  const responseTheme = {};
  const themeArr = themes.map((el) => {
    const themeName = el['Theme.theme_name'];
    const categoryName = el['Category.category_name'];
    const questionText = el['question'];
    const answer = el['answer'];
    const isAnswered = el['isAnswered'];
    if (responseTheme[themeName]) {
      responseTheme[themeName].categories.push({
        categoryName,
        question: { id: el['id'], text: questionText, answer, isAnswered },
      });
    } else {
      responseTheme[themeName] = {
        categories: [
          {
            categoryName,
            question: { id: el['id'], text: questionText, answer, isAnswered },
          },
        ],
      };
    }
  });
  const themeArray = Object.keys(responseTheme).map(theme => ({theme, categories: responseTheme[theme].categories}))
  res.json({ themeArray });
});

module.exports = router;
