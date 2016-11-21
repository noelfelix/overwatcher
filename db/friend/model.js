const Sequelize = require('sequelize');
const User = require('../user/model');

module.exports = (sequelize) => {
  return sequelize.define('friend', {
    username: {
      type: Sequelize.STRING,
      references: {
        model: User,
        key: 'username'
      },
      allowNull: false
    },
    friend: {
      type: Sequelize.STRING,
      references: {
        model: User,
        key: "username"
      },
      allowNull: false
    }
  });
};
