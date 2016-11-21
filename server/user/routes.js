const userController = require('./controller.js');

module.exports = (app) => {
  app.post('/', userController.signup);
  app.post('/:username', userController.signin);
  app.get('/:username', userController.retrieveUser);
  // app.put('/:name', userController.updateUser);
  // app.delete('/:name', userController.deleteUser);
};
