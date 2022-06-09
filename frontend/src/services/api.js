// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
import axios from 'axios';
import { Component } from 'react';

export class api extends Component {


    //baseURL = 'localhost:8080/api'



    /* /movie
    /user
    /movie/genres */

    getLoginValidation(username, password) {
        axios({
            method: 'post',
            url: 'localhost:8080/api' + '/user/login?username=' + username + '&password=' + password
        })
            .then((response) => {
                return response.data;
            });
    }
    getLoginValidated(username, password) {
        axios({
            method: 'post',
            url: 'locahost:8080/api/user',
            data: {
                username: username,
                password: password
            }
        })
            .then((response) => {
                return response.data;
            });
    }
    /* getMovieById(movieID) {
        axios
            .get(baseURL + "/" + movieID)
            .then((response) => {
                return response;
            });
    };
    
    getFavoriteGenre(userName) {
        axios
            .get(baseURL + "/" + userName)
            .then((response) => {
                return response;
            })
    }
    
    getMoviesByGenre(genreID) {
        axios
            .get(baseURL + "/movie/" + genreID)
            .then((response) => {
                return response;
            })
    }
    
    getMoviesByGenreAndDuration(genreID, maxLength) {
        axios
            .get(baseURL + "/" + genreID)
            .then((response) => {
                return response;
            })
    }
     */

}

export default api;