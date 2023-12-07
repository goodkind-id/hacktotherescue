export const getCandidates = async (query = '') => {
  //const URL = `http://localhost:3000/api/leaders?q=${query}`
  const URL = `/api/leaders?q=${query}`

  const response = await fetch(URL)

  const data = await response.json()

  const result = data?.data?.hits?.map(i => i?.document)

  return result
}
