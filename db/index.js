const cnxn = require('./cnxn')
const models = require('./models')
const syncAndSeed = require('./syncAndSeed')

syncAndSeed()

module.exports = {
  cnxn,
  models,
  syncAndSeed
}
