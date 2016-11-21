const userController = require('./controller.js');

module.exports = (app) => {
  app.post('/', userController.signup);
  app.post('/name', userController.signin);
  app.get('/:name', userController.retrieveUser);
  // app.put('/:name', userController.updateUser);
  // app.delete('/:name', userController.deleteUser);
};
