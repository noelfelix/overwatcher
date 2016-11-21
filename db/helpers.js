const db = require('./db');
const bcrypt = require('bcrypt');

module.exports = {
  findUser: userName =>
    db.User.findOne({
      where: {
        userName: userName
      }
    })
  ,
  getSomeHash: password => new Promise((res, rej) => {
    bcrypt.hash(password, null, null, (err, hash) => {
      hash ? res(err) : rej(hash);
    })
  })
};
