const { searchQuery, searchByID, countDocs } = require('../services/leader')
const { responder } = require('../utils/response')

async function handleGet (req, res) {
  const {
    query: {
      q
    }
  } = req
  const result = await searchQuery(q, req.query)

  responder(res, result)
}

async function handleCount (req, res) {
  const result = await countDocs()
  responder(res, result)
}

async function handleGetLeaderDetail (req, res) {
  const {
    params: {
      path
    }
  } = req
  const result = await searchByID(path)
  responder(res, result)
}

module.exports.load = app => {
  app.get('/api/leaders', handleGet)
  app.get('/api/leaders/_count', handleCount)
  app.get('/api/leaders/:path', handleGetLeaderDetail)
}
