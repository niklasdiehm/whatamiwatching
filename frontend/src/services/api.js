// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
import axios from 'axios';
import { Component } from 'react';

export class api extends Component {


    /* /movie
    /user
    /genre/list */


    // IP-Adresse benutzen von dem der es ausführt
    async getLoginValidation(username, password) {
        const response = await axios.get('http://192.168.0.202:8080/api' + '/user/login?username=' + username + '&password=' + password);
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }
    };

    async getMovieOfTheDay(userID) {
        const response = await axios.get('http://192.168.0.202:8080/api' + '/movie/movieOfTheDay?userID=' + userID);
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }

    };

    /* getMovieById(movieID) {
        axios
            .get(baseURL + "/" + movieID)
            .then((response) => {
                return response;
            });
    };
    
    updateFavoriteGenre(genreID) {
        axios
            .post(baseURL + "/") --> post neues favorite Genre
    }

    getFavoriteGenre(userID)) {
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