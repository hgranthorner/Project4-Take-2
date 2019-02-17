const cnxn = require('../')

const User = cnxn.define('user', {
  title: cnxn.Sequelize.STRING
})

module.exports = User
