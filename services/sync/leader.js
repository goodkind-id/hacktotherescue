const fs = require('fs')

async function fetchData(filePath) {
  console.log('fetching file: ', filePath)
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    const jsonData = JSON.parse(data)
    return jsonData
  } catch (error) {
    console.error('Error reading or parsing the file:', error.message)
  }
}

async function fetchFolder(folderPath) {
  console.log('fetching folder: ', folderPath)
  try {
    const data = fs.readdirSync(folderPath)
    return data
  } catch (error) {
    console.error('Error reading or parsing the folder:', error.message)
  }
}

async function fetchLeaders () {
  const arrayFiles = []
  const arrayLeaders = []

  const folderPath = 'data/JSON/caleg-info/dpr-ri/results'
  const folderContent = await fetchFolder(folderPath)
  folderContent.forEach(file => {
    arrayFiles.push(folderPath + '/' + file)
  })

  await Promise.all(arrayFiles.map(async (file) => {
    const data = await fetchData(file)
    try {
      arrayLeaders.push(data)
    } catch (error) {
      console.error('Error reading or parsing the file:', error.message)
    }
    return data
  }))

}

module.exports = {
  fetchLeaders,
}
