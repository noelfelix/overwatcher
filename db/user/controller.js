const db        = require('../db'),
      helpers   = require('../helpers'),
      bcrypt    = require('bcrypt'),
      constants = require('../../constants');

module.exports = {
  createUser: (newUser) => {
    return new Promise((res, rej) => {
      helpers.findUser(newUser.username)
        .then(user => {
          if (user) {
            rej(new Error(constants.USERNAME_TAKEN_ERROR_MESSAGE));
          } else {
            helpers.getSomeHash(newUser.password)
              .then((hash) => {
                newUser.password = hash;
                db.User.create(newUser)
                  .then(createdUser => {
                    res(createdUser);
                  });
              }, err => {
                rej(err);
              });
          }
        }, err => {
          rej(err);
        });
    });
  },
  getUser: (userName, password) => {
    return new Promise((res, rej) => {
      console.log(userName)
      helpers.findUser(userName)
        .then(user => {
          if (user) {
            bcrypt.compare(password, user.password, (err, match) => {
              console.log(err)
              err ? rej(err) : match ? res(user) : rej(constants.INCORRECT_PASSWORD_MESSAGE);
            });
          } else {
            rej(new Error(constants.USER_NOT_FOUND_MESSAGE));
          }
        });
    })
  }
};
