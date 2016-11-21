const db        = require('../db'),
      helpers   = require('../helpers'),
      bcrypt    = require('bcrypt'),
      constants = require('../constants');

module.exports = {
  createUser: (newUser) => {
    return new Promise((res, rej) => {
      helpers.findUser(user.userName)
        .then(user => {
          if (user) {
            rej(new Error(constants.USERNAME_TAKEN_ERROR_MESSAGE));
          }
          helpers.getSomeHash(newUser.password)
            .then(hash => {
              newUser.password = hash;
              db.User.create(newUser)
                .then(createdUser => {
                  res(createdUser);
                });
            }, err => {
              rej(err);
            });
        }, err => {
          rej(err);
        });
    });
  },
  getUser: (userName) => {
    return new Promise((res, rej) => {
      helpers.findUser(userName)
        .then(res => {
          if (res) {
            res(res);
          }
          rej(new Error('User not found'));
        });
    })
  }
};
