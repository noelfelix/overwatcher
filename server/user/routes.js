const userController = require('./controller.js');

module.exports = (app) => {
  app.post('/', userController.signup);
  app.post('/:username', userController.signin);
};
