const cnxn = require('../cnxn')

const Content = cnxn.define('content', {
  name: cnxn.Sequelize.STRING,
  body: cnxn.Sequelize.TEXT
})

module.exports = Content
