// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/


import axios from 'axios';

const api = axios.create({
    baseURL: 'localhost:8080/api'
})
/* /movie
/user
/movie/genres */

export function getLoginValidation(username, password) {
    axios({
        method: 'post',
        url: baseURL + '/user',
        data: {
            userName: username,
            password: password
        }
    })
        .then((response) => {
            return response.data;
        });
}

export function getMovieById(movieID) {
    axios
        .get(baseURL + "/" + movieID)
        .then((response) => {
            return response;
        });
};

export function getFavoriteGenre(userName) {
    axios
        .get(baseURL + "/" + userName)
        .then((response) => {
            return response;
        })
}

export function getMoviesByGenre(genreID) {
    axios
        .get(baseURL + "/movie/" + genreID)
        .then((response) => {
            return response;
        })
}

export function getMoviesByGenreAndDuration(genreID, maxLength) {
    axios
        .get(baseURL + "/" + genreID)
        .then((response) => {
            return response;
        })
}

export default api;