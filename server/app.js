const express = require('express')
const app = express()
const port = 3000

const { populateLeaders } = require('./services/sync/leader')

app.use(express.json())

const modules = [
  require('./modules/leader')
]

modules.forEach(m => m.load(app))

populateLeaders()

app.listen(port, () => {
  console.log(`Goodkind Hacktotherescue service listening on port ${port}`)
})
