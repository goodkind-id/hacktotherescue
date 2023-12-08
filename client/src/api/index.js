export const getCandidates = async (query = "") => {
  //const URL = `http://localhost:3000/api/leaders?q=${query}`
  const URL = `/api/leaders?q=${query}`

  const response = await fetch(URL)

  const data = await response.json()

  const result = data?.data?.hits?.map((i) => i?.document)
  const total = data?.data?.count

  return {
    result,
    total,
  }
}

export const getCandidateById = async (id) => {
  //const URL = `http://localhost:3000/api/leaders/${id}`
  const URL = `/api/leaders/${id}`

  const response = await fetch(URL)

  const data = await response.json()

  const result = data?.data

  return result
}

export const getSummary = async ({ name, issue }) => {
  if (!name || !issue) return null

  const URL = `/summary?name=${name}&issue=${issue}`

  const response = await fetch(URL)

  const data = await response.json()

  return data?.result
}
