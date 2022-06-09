// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
import axios from 'axios';
import { Component } from 'react';

export class api extends Component {


    //baseURL = 'localhost:8080/api'



    /* /movie
    /user
    /genre/list */

    // getLoginValidation2(username, password) {
    //     // data = {username: 'Affenkopf', password: 'password'}
    //     response = axios.post('http://localhost:8080/api/user/login?username=' + username + '&password=' + password)
    //     data = response.data
    //     return data
    // }


    getLoginValidation(username, password) {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api' + '/user/login?username=' + username + '&password=' + password
        })
            .then((response) => {
                return response;
            }).catch((error) => {
                 console.log(error.request);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.header);
                console.log(error.response.statusText);
                 console.log(error);
            });
    }

    // getLoginValidated(username, password) {
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8080/api/user',
    //         data: {
    //             username: username,
    //             password: password
    //         }
    //     })
    //         .then((response) => {
    //             return response.data;
    //         });
    // }
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