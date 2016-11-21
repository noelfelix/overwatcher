const Sequelize = require('sequelize');
const sequelize = new Sequelize('overwatcher', process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'sqlite',
  pool: {
    min: 0,
    max: 10,
    idle: 10000
  },
  storage: "overwatcher.sqlite"
});

const Character = require('./character/model')(sequelize);
const Friend = require('./friend/model')(sequelize);
const Score = require('./score/model')(sequelize);
const User = require('./user/model')(sequelize);
User.sync({force: true});

module.exports = {
  Character: Character,
  Friend: Friend,
  Score: Score,
  User: User,
};
