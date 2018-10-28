import axios from "axios"


const runQuery = term => {
  let formattedTerm = term.trim()

  const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedTerm}&maxResults=39`

  return axios.get(url).then(results => results.data)
};

const getUserBooks = () => {
  const url = '/api/user/books';
  return axios.get(url).then(results => results);
};

const saveBook = (id, title, authors, publisher, image, url, user) => {
  const newBook = {
    id: id, 
    title: title, 
    authors:[authors], 
    publisher: publisher, 
    image: image,
    url: url
  };

  const userP = {user:user};
  const postUrl = '/api/user/books';
  return axios.post(postUrl, newBook, userP).then(response => {
    console.log("post response", response.data._id)
    return response.data._id;
  });
};

const deleteBook = (bookID) => {
  return axios.delete(`/api/user/books/${bookID}`).then(response => {
    console.log("deleted user from book profile", bookID);
    return axios.get('/api/user/books');
  });
};

// const login = () => {
//   axios.get('/login')
//   .then(response => console.log("success"))
//   .catch(function(error) {
//     console.log('Looks like there was a problem: \n', error);
//   });
// }



export {runQuery, getUserBooks, saveBook, deleteBook };