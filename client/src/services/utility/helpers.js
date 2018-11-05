import axios from "axios"

const runQuery = term => {
  let formattedTerm = term.trim()

  const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedTerm}&maxResults=39`

  return axios.get(url).then(results => results.data)
}

const getUserBooks = () => {
  return axios.get('/api/user/books').then(results => results)
}

const saveUserBook = (id, title, authors, description, publisher, image, infoLink) => {
  var newBook = {
    id: id,
    title: title,
    authors: authors,
    description: description,
    publisher: publisher,
    image: image,
    infoLink: infoLink
  }

  const postUrl = '/api/user/books';

  return axios.post(postUrl, newBook).then(response => response.data._id)
}

export {runQuery, getUserBooks, saveUserBook };