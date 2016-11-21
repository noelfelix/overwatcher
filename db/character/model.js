const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('character', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    hiscore: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
};
