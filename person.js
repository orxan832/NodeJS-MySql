const Sequelize = require('sequelize');
const db = require('./db');

const Person = db.define('person', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true
});

module.exports = Person;