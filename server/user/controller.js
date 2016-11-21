const User      = require('../../db/user/controller'),
      constants = require('../../constants');

module.exports = {
  signup: (req, res) => {
    console.log(req.body)
    User.createUser(req.body)
      .then(user => {
        res.status(201).send(user);
      }, err => {
        err.message == constants.USERNAME_TAKEN_ERROR_MESSAGE ? res.status(400).send(err) : res.status(500).send(err);
      });
  },
  signin: (req, res) => {
    User.getUser(req.params.username, req.body.password)
      .then(user => {
        res.send(user);
      }, err => {
        console.log(err)
        err.message == constants.INCORRECT_PASSWORD_MESSAGE || err.message == constants.USER_NOT_FOUND_MESSAGE ? res.status(400).send(err) : res.status(500).send(err);
      });
  }
};
