export const getCandidates = async () => {
  //const URL = "http://localhost:3000/api/leaders?q="
  const URL = "/api/leaders?q="

  const response = await fetch(URL)

  const data = await response.json()

  const result = data?.data?.hits?.map(i => i?.document)

  return result
}
