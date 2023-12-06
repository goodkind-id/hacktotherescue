const express = require('express')
const app = express()
const port = 3000

const { fetchLeaders } = require('./services/sync/leader')

app.use(express.json())

fetchLeaders()

app.listen(port, () => {
  console.log(`Goodkind Hacktotherescue service listening on port ${port}`)
})
