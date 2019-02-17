const Sequelize = require('sequelize')

const dbUrl = process.env.DATABASE_URL || 'fake postgres address'

module.exports = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialect: 'postgres',
  operatorsAliases: false
})
