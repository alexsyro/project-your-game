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
  const themeObj = {};
  themes.forEach((el) => {
    const themeName = el['Theme.theme_name'];
    const categoryName = el['Category.category_name'];
    const questionText = el['question'];
    const answer = el['answer'];
    const isAnswered = el['isAnswered'];
    if (themeObj[themeName]) {
      themeObj[themeName].categories.push({
        categoryName,
        question: { id: el['id'], text: questionText, answer, isAnswered },
      });
    } else {
      themeObj[themeName] = {
        categories: [
          {
            categoryName,
            question: { id: el['id'], text: questionText, answer, isAnswered },
          },
        ],
      };
    }
  });
  const themesArray = Object.keys(themeObj).map(theme => ({theme, categories: themeObj[theme].categories}))
  res.json({ themeArray: themesArray });
});

module.exports = router;
