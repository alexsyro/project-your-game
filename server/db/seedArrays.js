const themes = [
  { name: 'Игры', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Фильмы', createdAt: new Date(), updatedAt: new Date() },
  { name: '1 Фаза', createdAt: new Date(), updatedAt: new Date() },
];
const categories = [
  { name: '200', createdAt: new Date(), updatedAt: new Date() },
  { name: '400', createdAt: new Date(), updatedAt: new Date() },
  { name: '600', createdAt: new Date(), updatedAt: new Date() },
  { name: '800', createdAt: new Date(), updatedAt: new Date() },
  { name: '1000', createdAt: new Date(), updatedAt: new Date() },
];

const questions = [
  {
    theme_id: 1,
    category_id: 1,
    question: 'Как зовут брата Марио в одноимённой игре?',
    answer: 'Луиджи',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 1,
    category_id: 2,
    question: 'Кто является маскотом Сеги?',
    answer: 'Соник',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 1,
    category_id: 3,
    question: 'Какая компания разрабатывала Vikings и Rock"n"Roll Racing?',
    answer: 'Blizzard',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 1,
    category_id: 4,
    question: 'Благодаря какой игре стал известен Джон Кармак?',
    answer: 'Doom',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 1,
    category_id: 5,
    question: 'Какой игрой были вдохновлены разработчик Fallout?',
    answer: 'Wasteland',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 2,
    category_id: 1,
    question: 'Как звали самого умного из Черепашек ниндзя?',
    answer: 'Донателло',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 2,
    category_id: 2,
    question: 'За каким зверьком должен быть следовать Нео, согласно сообщению на ПК?',
    answer: 'Кролик',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 2,
    category_id: 3,
    question: 'После этого сериала Джиллиан Андерсон стала весьма известной?',
    answer: 'Секретные материалы',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 2,
    category_id: 4,
    question: 'В каком фильме впервые показали математически верное представление черной дыры?',
    answer: 'Интерстеллар',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 2,
    category_id: 5,
    question:
      'Какой фильм с Харрисоном Фордом в 1982 году провалился в прокате, но со временем стал популярным?',
    answer: 'Бегущий по лезвию',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 3,
    category_id: 1,
    question: 'Какой из этих методов не мутирует массив: map, filter, forEach?',
    answer: 'forEach',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 3,
    category_id: 2,
    question: 'Чему будет равно условие [1,2,3]==[1,2,3]?',
    answer: 'false',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 3,
    category_id: 3,
    question: 'Какую сортировку выполняет sort по умолчанию?',
    answer: 'Лексикографическую',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 3,
    category_id: 4,
    question: 'Что выведется в конце данной операции [1,2,3,4,5].reduce((acc, el, index) => acc+el-index)?',
    answer: '5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    theme_id: 3,
    category_id: 5,
    question: 'Если null > 0 = false, null == 0 = false то чему будет равен null >= 0?',
    answer: 'true',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = { themes, categories, questions };
