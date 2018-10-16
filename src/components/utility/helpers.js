import axios from "axios"

const runQuery = term => {
    let formattedTerm = term.trim()
  
    const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedTerm}&maxResults=39&key=${
      process.env.REACT_APP_API_URL
    }`
  
    return axios.get(url).then(results => results.data)
  }

export {runQuery};