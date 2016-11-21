const Sequelize = require('sequelize');
const User = require('../user/model');
const Character = require('../character/model');

module.exports = (sequelize) => {
  return sequelize.define('score', {
    username: {
      type: Sequelize.STRING,
      references: {
        model: User,
        key: 'username'
      },
      allowNull: false
    },
    character: {
      type: Sequelize.STRING,
      references: {
        model: Character,
        key: "name"
      },
      allowNull: false,
      primaryKey: true
    },
    kills: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  });
};
