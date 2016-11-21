const User      = require('../../db/user/controller'),
      constants = require('../constants');

module.exports = {
  signup: (req, res, next) => {
    User.createUser(req.body.user)
      .then(user => {
        res.status(201).send(user);
      }, err => {
        err == constants.USERNAME_TAKEN_ERROR_MESSAGE ? res.status(400).send(err) : res.status(500).send(err);
      });
  },
  signin: (req, res, next) => {
  },
  retrieveUser: (req, res, next) => {
    User.getUser(req.params.name)
      .then(response => {
        res.send(response);
      }, err => {
        res.status(404).send(err);
      });
  },
  updateUser: (req, res, next) => {

  },
  deleteUser: (req, res, next) => {

  }
};
