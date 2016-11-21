const db      = require('./db'),
      bcrypt  = require('bcrypt');

module.exports = {
  findUser: userName =>
    db.User.findOne({
      where: {
        userName: userName
      }
    })
  ,
  getSomeHash: password => new Promise((res, rej) => {
    bcrypt.hash(password, 10, (err, hash) => {
      hash ? res(hash) : rej(err);
    });
  })
};
