const fs = require('fs')
const { init, insertDocs, countDocs } = require('../leader')

const leaderImage = {}

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
  const idPrefix = "dpr-ri-"

  const data = {
    id: idPrefix + leader.idKpu,
    name: leader.NAMA_LENGKAP,
    gender: (leader.JENIS_KELAMIN == 'Perempuan') ? 'f' : 'm',
    title,
    program: leader?.PROGRAM_USULAN?.replace(/¶/g,'\n'),
    motivation: leader?.MOTIVASI_CALON?.replace(/¶/g,'\n') || leader?.MOTIVASI?.replace(/¶/g,'\n'),
    picUrl: leaderImage[leader.idKpu],
  }

  delete leader.NAMA_LENGKAP
  delete leader.JENIS_KELAMIN
  delete leader.PROGRAM_USULAN
  delete leader.MOTIVASI_CALON
  delete leader.MOTIVASI

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

async function fetchLeaders (
  title,
  folderPath = "data/JSON/caleg-info/dpr-ri/results/"
) {
  await init()

  const arrayFiles = []
  const arrayLeaders = []

  const folderContent = await _fetchFolder(folderPath)
  folderContent.forEach(file => {
    arrayFiles.push(folderPath + file)
  })

  await Promise.all(arrayFiles.map(async (file) => {
    const data = await _fetchData(file)
    try {
      const idKpu = file.replace(folderPath, '').replace('.json', '')
      arrayLeaders.push({ idKpu, ...data })
    } catch (error) {
      console.error('Error reading or parsing the file:', error.message)
    }
    return data
  }))

  console.log('Done reading JSON files')

  await _mapAndInsert(arrayLeaders, title)

  console.log('Done populating leaders')
}

async function populateLeaders () {
  const imageFile = await _fetchData("data/caleg_dpr.json")

  // map image file into key value pair
  let noCounter = 0
  await Promise.all(
    imageFile.map(item => {
      let idKpu = item.info.id_kpu
      if (idKpu == undefined || idKpu == null || idKpu == '') {
        noCounter++
      }

      leaderImage[idKpu] = item.picUrl
    })
  )
  console.log('image without id kpu:', noCounter)

  await fetchLeaders("Caleg DPR-RI", "data/JSON/caleg-info/dpr-ri/results/")
}

module.exports = {
  populateLeaders,
}
