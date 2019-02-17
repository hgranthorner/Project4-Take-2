const cnxn = require('../cnxn')

const Page = cnxn.define('page', {
  title: cnxn.Sequelize.STRING
})

module.exports = Page
