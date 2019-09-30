const Sequelize = require('sequelize');
module.exports = new Sequelize('fayda', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  