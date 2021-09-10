const path = require('path');
const express = require('express');
const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);
const logger = require('morgan');
const dotenv = require('dotenv');
const userApiRouter = require('./routes/users')
const taskApiRouter = require('./routes/tasks')
const cors = require('cors');

dotenv.config();

const { PORT, PHRASE } = process.env;


const server = express();

const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: PHRASE,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
  },
};

//Настраиваем корс на работу с хостом реакта
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//Morgan setup
server.use(logger('dev'));

//Разрешаем cors
server.use(cors(corsOptions));

//Sessions
server.use(session(sessionConfig));

//Body parsers
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//Routers
server.use('/api/users', userApiRouter);
server.use('/api/tasks', taskApiRouter);

server.listen(PORT, () => {
  console.log(`Server has been listening on ${PORT}`);
})
