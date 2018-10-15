import axios from "axios"


const runQuery = term => {
    let formattedTerm = term.trim();

    return axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${formattedTerm}&maxResults=39&key=${process.env.REACT_APP_API_URL}`
    ).then(results => {
        return results.data;
    })
}

export {runQuery};