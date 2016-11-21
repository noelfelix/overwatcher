const morgan      = require('morgan'),
      bodyParser  = require('body-parser');

module.exports = (app, express) => {
  const userRouter = express.Router();

  require('dotenv').config();
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/user', userRouter);

  var routes = require('../user/routes')(userRouter);
};
