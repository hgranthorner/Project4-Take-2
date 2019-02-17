const cnxn = require('./cnxn')
const { Page, Content } = require('./models')

Page.hasMany(Content)
Content.belongsTo(Page)

const syncAndSeed = () => {
  return cnxn.sync({ force: true }).then(async () => {
    const [home, employees, contact] = await Promise.all([
      Page.create({ title: 'Home' }),
      Page.create({ title: 'Employees' }),
      Page.create({ title: 'Contact ' })
    ])

    await Promise.all([
      Content.create({ name: 'Welcome Home 1', body: 'xoxoxo', pageId: home.id }),
      Content.create({ name: 'Welcome Home 2', body: 'xoxoxo', pageId: home.id }),
      Content.create({ name: 'LARRY', body: 'CTO', pageId: employees.id }),
      Content.create({ name: 'CURLY', body: 'COO', pageId: employees.id }),
      Content.create({ name: 'MOE', body: 'CEO', pageId: employees.id }),
      Content.create({ name: 'Phone', body: '212-555-1212', pageId: contact.id }),
      Content.create({ name: 'Telex', body: '212-555-1213', pageId: contact.id }),
      Content.create({ name: 'FAX', body: '212-555-1214', pageId: contact.id })
    ])
  })
}

module.exports = syncAndSeed
