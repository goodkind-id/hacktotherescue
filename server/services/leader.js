const { create, search, insertMultiple, count, remove } = require('@orama/orama')
const { printMemoryUsage } = require('../utils/memory')

const schema = {
  id: 'string',
  name: 'string',
  title: 'string',
  gender: 'string',
  program: 'string',
  motivation: 'string',
}

const DEFAULT_PAGE_SIZE = 18

let db = null

async function init (docs = []) {
  db = await create({
    schema,
    sortBy: {
      unsortableProperties: [
        'name',
        'gender',
        'program',
        'motivation'
      ]
    },
    components: {
      tokenizer: {
        stemming: true,
        stemmerSkipProperties: [
          'title',
          'gender',
        ],
      }
    }
  })

  await insertMultiple(db, docs)
}

function _embedLeaderDetailsInDocuments(results) {
  return {
    ...results,
    hits: results.hits.map(hit => ({
      ...hit,
      document: {
        ...hit.document,
        score: hit.score
      }
    }))
  }
}

async function _searchOrama (db, searchParams) {
  let searchMessage = ''
  let searchStatus = ''

  // run search
  result = await search(db, searchParams)

  // printMemoryUsage()

  return {
    result,
    searchMessage,
    searchStatus
  }
}

async function searchQuery (term = "", queryParams) {
  try {
    let properties = ['name']

    // process query params
    let searchMessage = ''
    const genderQuery = queryParams?.gender
    const titleQuery = queryParams?.titles
    const thresholdQuery = queryParams?.threshold || 0.1
    let termFocus = 'term'

    const sortByQuery = queryParams?.sortBy
    const sortDirectionQuery = queryParams?.sortDirection

    // where params for filtering (only available for data in schema)
    const whereParams = {}
    if (genderQuery) whereParams.gender = genderQuery.split(",")
    if (titleQuery && termFocus != 'title') whereParams.title = titleQuery.split(",")

    // search sort params
    let sortParam = null
    if (sortByQuery) {
      sortParam = {
        property: sortByQuery,
        order: sortDirectionQuery
      }
    }

    if (queryParams?.threshold) searchMessage = searchMessage + ' Threshold: ' + queryParams.threshold + '.'

    const limit = parseInt(queryParams?.size) || DEFAULT_PAGE_SIZE
    const page = parseInt(queryParams?.page)
    const offset = (page - 1 || 0) * limit
    const searchParams = {
      term,
      threshold: thresholdQuery,
      properties,
      where: whereParams,
      limit,
      offset,
      sortBy: sortParam
    }

    // run search
    const searchResult = await _searchOrama(db, searchParams)
    if (searchResult.searchMessage) searchMessage = searchResult.searchMessage

    const resultsWithDetails = _embedLeaderDetailsInDocuments(searchResult.result)

    // pagination
    const resultCount = parseInt(resultsWithDetails.count)
    const paging = {
      page: page || 1,
      size: limit,
      total: resultCount,
      totalPage: Math.ceil(resultCount / limit)
    }

    return {
      ...resultsWithDetails,
      paging,
      searchMessage,
      searchStatus: searchResult.searchStatus
    }
  } catch (error) {
    console.error('Error occurred while searching:', error)
    throw error
  }
}

async function insertDocs (docs) {
  await insertMultiple(db, docs)
}

async function removeDoc (id) {
  await remove(db, id)
}

async function countDocs () {
  return await count(db)
}

module.exports = {
  init,
  searchQuery,
  insertDocs,
  removeDoc,
  countDocs
}
