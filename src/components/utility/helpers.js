import axios from "axios"


const runQuery = term => {
  let formattedTerm = term.trim()

  const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedTerm}&maxResults=39`

  return axios.get(url).then(results => results.data)
}

export {runQuery};