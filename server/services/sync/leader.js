const fs = require('fs')
const { init, insertDocs, countDocs } = require('../leader')

async function _fetchData(filePath) {
  // console.log('fetching file: ', filePath)
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(data)
    return jsonData
  } catch (error) {
    console.error('Error reading or parsing the file:', error.message)
  }
}

async function _fetchFolder(folderPath) {
  console.log('fetching folder: ', folderPath)
  try {
    const data = fs.readdirSync(folderPath)
    return data
  } catch (error) {
    console.error('Error reading or parsing the folder:', error.message)
  }
}

function _mapForOrama (leader, title) {
  const data = {
    name: leader.NAMA_LENGKAP,
    gender: (leader.JENIS_KELAMIN == 'Perempuan') ? 'f' : 'm',
    title,
    program: leader?.PROGRAM_USULAN,
    motivation: leader?.MOTIVASI_CALON,
  }

  delete leader.NAMA_LENGKAP
  delete leader.JENIS_KELAMIN
  delete leader.PROGRAM_USULAN

  return {
    ...data,
    ...leader
  }
}

async function _mapAndInsert (leadersResult = [], title) {
  const leaders = leadersResult.flat().map(leader => {
    return _mapForOrama(leader, title)
  })

  // insert into doc
  await insertDocs(leaders)
  const count = await countDocs()

  console.log('...Inserted calegs...', title, leaders.length, 'Total:', count)
}

async function fetchLeaders () {
  await init()

  const arrayFiles = []
  const arrayLeaders = []

  const folderPath = 'data/JSON/caleg-info/dpr-ri/results'
  const folderContent = await _fetchFolder(folderPath)
  folderContent.forEach(file => {
    arrayFiles.push(folderPath + '/' + file)
  })

  await Promise.all(arrayFiles.map(async (file) => {
    const data = await _fetchData(file)
    try {
      arrayLeaders.push(data)
    } catch (error) {
      console.error('Error reading or parsing the file:', error.message)
    }
    return data
  }))

  console.log('Done reading JSON files')

  _mapAndInsert(arrayLeaders, 'Caleg DPR-RI')

}

module.exports = {
  fetchLeaders,
}
