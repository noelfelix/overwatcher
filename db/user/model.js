const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: Sequelize.STRING(10),
      allowNull: true,
      unique: true
    }
  });
};
