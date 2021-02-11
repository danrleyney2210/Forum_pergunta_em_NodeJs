const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'danrley', 'Nadaver@2210',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;